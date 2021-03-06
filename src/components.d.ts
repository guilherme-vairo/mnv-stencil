/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppHeropage {
    'data': any;
    'match': MatchResults;
    'numbers': any;
  }
  interface MnvAbout {
    'mainText': string;
    'mainTitle': string;
  }
  interface MnvAnchor {
    'href': string;
  }
  interface MnvAppBar {
    'color': 'inherit' | 'primary' | 'secondary' | 'default';
    'position': 'fixed' | 'sticky' | 'absolute' | 'static' | 'relative';
  }
  interface MnvBase {}
  interface MnvBg {}
  interface MnvBignumber {
    'numbers': any;
  }
  interface MnvBignumbers {
    'setNumbers': any[];
  }
  interface MnvButton {
    'contained': boolean;
    'disabled': boolean;
    'full': boolean;
    'marginzero': boolean;
    'outlined': boolean;
    'type': string;
  }
  interface MnvCard {
    'button': string;
    'cardtitle': any;
    'link': string;
    'overline': any;
    'subtitle': any;
    'width': number;
  }
  interface MnvCol {
    'class': string;
  }
  interface MnvContainer {
    'lg': number;
    'md': number;
    'sm': number;
    'xl': number;
    'xs': number;
  }
  interface MnvDivider {}
  interface MnvExpositor {
    'projects': any;
    'sectionSubtitle': string;
    'sectionTitle': string;
    'spotlight': any;
    'spotlightAlt': string;
  }
  interface MnvExpositorBase {
    'data': any;
  }
  interface MnvFigure {
    'alt': string;
    'src': string;
  }
  interface MnvFigureCaption {
    'alt': string;
    'bold': boolean;
    'boldspotlight': boolean;
    'boldtext': boolean;
    'italic': boolean;
    'italicspotlight': boolean;
    'italictext': boolean;
    'src': string;
  }
  interface MnvFooter {
    'locations': string[];
  }
  interface MnvGrid {
    'block': boolean;
    'container': boolean;
    'indented': boolean;
    'item': boolean;
    'lg': string;
    'md': string;
    'sm': string;
    'spacing': number;
    'xl': string;
  }
  interface MnvHero {
    'background': string;
    'bgimg': string;
    'button': string;
    'herotitle': string;
  }
  interface MnvIconbutton {
    'disabled': boolean;
    'type': string;
  }
  interface MnvListCard {
    'data': any;
    'name': string;
  }
  interface MnvMark {}
  interface MnvMobButton {
    'open': boolean;
  }
  interface MnvMobDrawer {
    'open': boolean;
  }
  interface MnvMobMenu {
    'open': boolean;
    'setClass': string;
  }
  interface MnvNavbar {
    'setClass': string;
  }
  interface MnvNavbutton {
    'contained': boolean;
    'disabled': boolean;
    'marginzero': boolean;
    'outlined': boolean;
    'type': string;
  }
  interface MnvOverline {}
  interface MnvParagraph {
    /**
    * Altera o parágrafo para tamanho reduzido (body 2).
    */
    'bodytwo': boolean;
    /**
    * Ativa ou desativa estilização de capitular.
    */
    'capitular': boolean;
  }
  interface MnvPre {}
  interface MnvProjeto {
    'projButton': string;
    'projButtonUrl': string;
    'projImg': string;
    'projImgAlt': string;
    'projImgLegenda': string;
    'projText': string;
    'projTitle': string;
  }
  interface MnvRow {}
  interface MnvSlide {
    'image': string;
  }
  interface MnvSlider {
    'cards': any[];
    'currentIndex': number;
    'height': number;
    'images': string[];
    'translateValue': number;
    'width': number;
  }
  interface MnvStrong {}
  interface MnvSubtitle {
    'type': string;
  }
  interface MnvT {
    'hierarchy': number;
    'level': string;
    'override': number;
    'white': boolean;
  }
  interface MnvTitle {
    'hierarchy': number;
    'level': string;
    'override': number;
    'white': boolean;
  }
  interface MnvTooltip {
    'label': string;
    'length': string;
  }
}

declare global {


  interface HTMLAppHeropageElement extends Components.AppHeropage, HTMLStencilElement {}
  var HTMLAppHeropageElement: {
    prototype: HTMLAppHeropageElement;
    new (): HTMLAppHeropageElement;
  };

  interface HTMLMnvAboutElement extends Components.MnvAbout, HTMLStencilElement {}
  var HTMLMnvAboutElement: {
    prototype: HTMLMnvAboutElement;
    new (): HTMLMnvAboutElement;
  };

  interface HTMLMnvAnchorElement extends Components.MnvAnchor, HTMLStencilElement {}
  var HTMLMnvAnchorElement: {
    prototype: HTMLMnvAnchorElement;
    new (): HTMLMnvAnchorElement;
  };

  interface HTMLMnvAppBarElement extends Components.MnvAppBar, HTMLStencilElement {}
  var HTMLMnvAppBarElement: {
    prototype: HTMLMnvAppBarElement;
    new (): HTMLMnvAppBarElement;
  };

  interface HTMLMnvBaseElement extends Components.MnvBase, HTMLStencilElement {}
  var HTMLMnvBaseElement: {
    prototype: HTMLMnvBaseElement;
    new (): HTMLMnvBaseElement;
  };

  interface HTMLMnvBgElement extends Components.MnvBg, HTMLStencilElement {}
  var HTMLMnvBgElement: {
    prototype: HTMLMnvBgElement;
    new (): HTMLMnvBgElement;
  };

  interface HTMLMnvBignumberElement extends Components.MnvBignumber, HTMLStencilElement {}
  var HTMLMnvBignumberElement: {
    prototype: HTMLMnvBignumberElement;
    new (): HTMLMnvBignumberElement;
  };

  interface HTMLMnvBignumbersElement extends Components.MnvBignumbers, HTMLStencilElement {}
  var HTMLMnvBignumbersElement: {
    prototype: HTMLMnvBignumbersElement;
    new (): HTMLMnvBignumbersElement;
  };

  interface HTMLMnvButtonElement extends Components.MnvButton, HTMLStencilElement {}
  var HTMLMnvButtonElement: {
    prototype: HTMLMnvButtonElement;
    new (): HTMLMnvButtonElement;
  };

  interface HTMLMnvCardElement extends Components.MnvCard, HTMLStencilElement {}
  var HTMLMnvCardElement: {
    prototype: HTMLMnvCardElement;
    new (): HTMLMnvCardElement;
  };

  interface HTMLMnvColElement extends Components.MnvCol, HTMLStencilElement {}
  var HTMLMnvColElement: {
    prototype: HTMLMnvColElement;
    new (): HTMLMnvColElement;
  };

  interface HTMLMnvContainerElement extends Components.MnvContainer, HTMLStencilElement {}
  var HTMLMnvContainerElement: {
    prototype: HTMLMnvContainerElement;
    new (): HTMLMnvContainerElement;
  };

  interface HTMLMnvDividerElement extends Components.MnvDivider, HTMLStencilElement {}
  var HTMLMnvDividerElement: {
    prototype: HTMLMnvDividerElement;
    new (): HTMLMnvDividerElement;
  };

  interface HTMLMnvExpositorElement extends Components.MnvExpositor, HTMLStencilElement {}
  var HTMLMnvExpositorElement: {
    prototype: HTMLMnvExpositorElement;
    new (): HTMLMnvExpositorElement;
  };

  interface HTMLMnvExpositorBaseElement extends Components.MnvExpositorBase, HTMLStencilElement {}
  var HTMLMnvExpositorBaseElement: {
    prototype: HTMLMnvExpositorBaseElement;
    new (): HTMLMnvExpositorBaseElement;
  };

  interface HTMLMnvFigureElement extends Components.MnvFigure, HTMLStencilElement {}
  var HTMLMnvFigureElement: {
    prototype: HTMLMnvFigureElement;
    new (): HTMLMnvFigureElement;
  };

  interface HTMLMnvFigureCaptionElement extends Components.MnvFigureCaption, HTMLStencilElement {}
  var HTMLMnvFigureCaptionElement: {
    prototype: HTMLMnvFigureCaptionElement;
    new (): HTMLMnvFigureCaptionElement;
  };

  interface HTMLMnvFooterElement extends Components.MnvFooter, HTMLStencilElement {}
  var HTMLMnvFooterElement: {
    prototype: HTMLMnvFooterElement;
    new (): HTMLMnvFooterElement;
  };

  interface HTMLMnvGridElement extends Components.MnvGrid, HTMLStencilElement {}
  var HTMLMnvGridElement: {
    prototype: HTMLMnvGridElement;
    new (): HTMLMnvGridElement;
  };

  interface HTMLMnvHeroElement extends Components.MnvHero, HTMLStencilElement {}
  var HTMLMnvHeroElement: {
    prototype: HTMLMnvHeroElement;
    new (): HTMLMnvHeroElement;
  };

  interface HTMLMnvIconbuttonElement extends Components.MnvIconbutton, HTMLStencilElement {}
  var HTMLMnvIconbuttonElement: {
    prototype: HTMLMnvIconbuttonElement;
    new (): HTMLMnvIconbuttonElement;
  };

  interface HTMLMnvListCardElement extends Components.MnvListCard, HTMLStencilElement {}
  var HTMLMnvListCardElement: {
    prototype: HTMLMnvListCardElement;
    new (): HTMLMnvListCardElement;
  };

  interface HTMLMnvMarkElement extends Components.MnvMark, HTMLStencilElement {}
  var HTMLMnvMarkElement: {
    prototype: HTMLMnvMarkElement;
    new (): HTMLMnvMarkElement;
  };

  interface HTMLMnvMobButtonElement extends Components.MnvMobButton, HTMLStencilElement {}
  var HTMLMnvMobButtonElement: {
    prototype: HTMLMnvMobButtonElement;
    new (): HTMLMnvMobButtonElement;
  };

  interface HTMLMnvMobDrawerElement extends Components.MnvMobDrawer, HTMLStencilElement {}
  var HTMLMnvMobDrawerElement: {
    prototype: HTMLMnvMobDrawerElement;
    new (): HTMLMnvMobDrawerElement;
  };

  interface HTMLMnvMobMenuElement extends Components.MnvMobMenu, HTMLStencilElement {}
  var HTMLMnvMobMenuElement: {
    prototype: HTMLMnvMobMenuElement;
    new (): HTMLMnvMobMenuElement;
  };

  interface HTMLMnvNavbarElement extends Components.MnvNavbar, HTMLStencilElement {}
  var HTMLMnvNavbarElement: {
    prototype: HTMLMnvNavbarElement;
    new (): HTMLMnvNavbarElement;
  };

  interface HTMLMnvNavbuttonElement extends Components.MnvNavbutton, HTMLStencilElement {}
  var HTMLMnvNavbuttonElement: {
    prototype: HTMLMnvNavbuttonElement;
    new (): HTMLMnvNavbuttonElement;
  };

  interface HTMLMnvOverlineElement extends Components.MnvOverline, HTMLStencilElement {}
  var HTMLMnvOverlineElement: {
    prototype: HTMLMnvOverlineElement;
    new (): HTMLMnvOverlineElement;
  };

  interface HTMLMnvParagraphElement extends Components.MnvParagraph, HTMLStencilElement {}
  var HTMLMnvParagraphElement: {
    prototype: HTMLMnvParagraphElement;
    new (): HTMLMnvParagraphElement;
  };

  interface HTMLMnvPreElement extends Components.MnvPre, HTMLStencilElement {}
  var HTMLMnvPreElement: {
    prototype: HTMLMnvPreElement;
    new (): HTMLMnvPreElement;
  };

  interface HTMLMnvProjetoElement extends Components.MnvProjeto, HTMLStencilElement {}
  var HTMLMnvProjetoElement: {
    prototype: HTMLMnvProjetoElement;
    new (): HTMLMnvProjetoElement;
  };

  interface HTMLMnvRowElement extends Components.MnvRow, HTMLStencilElement {}
  var HTMLMnvRowElement: {
    prototype: HTMLMnvRowElement;
    new (): HTMLMnvRowElement;
  };

  interface HTMLMnvSlideElement extends Components.MnvSlide, HTMLStencilElement {}
  var HTMLMnvSlideElement: {
    prototype: HTMLMnvSlideElement;
    new (): HTMLMnvSlideElement;
  };

  interface HTMLMnvSliderElement extends Components.MnvSlider, HTMLStencilElement {}
  var HTMLMnvSliderElement: {
    prototype: HTMLMnvSliderElement;
    new (): HTMLMnvSliderElement;
  };

  interface HTMLMnvStrongElement extends Components.MnvStrong, HTMLStencilElement {}
  var HTMLMnvStrongElement: {
    prototype: HTMLMnvStrongElement;
    new (): HTMLMnvStrongElement;
  };

  interface HTMLMnvSubtitleElement extends Components.MnvSubtitle, HTMLStencilElement {}
  var HTMLMnvSubtitleElement: {
    prototype: HTMLMnvSubtitleElement;
    new (): HTMLMnvSubtitleElement;
  };

  interface HTMLMnvTElement extends Components.MnvT, HTMLStencilElement {}
  var HTMLMnvTElement: {
    prototype: HTMLMnvTElement;
    new (): HTMLMnvTElement;
  };

  interface HTMLMnvTitleElement extends Components.MnvTitle, HTMLStencilElement {}
  var HTMLMnvTitleElement: {
    prototype: HTMLMnvTitleElement;
    new (): HTMLMnvTitleElement;
  };

  interface HTMLMnvTooltipElement extends Components.MnvTooltip, HTMLStencilElement {}
  var HTMLMnvTooltipElement: {
    prototype: HTMLMnvTooltipElement;
    new (): HTMLMnvTooltipElement;
  };
  interface HTMLElementTagNameMap {
    'app-heropage': HTMLAppHeropageElement;
    'mnv-about': HTMLMnvAboutElement;
    'mnv-anchor': HTMLMnvAnchorElement;
    'mnv-app-bar': HTMLMnvAppBarElement;
    'mnv-base': HTMLMnvBaseElement;
    'mnv-bg': HTMLMnvBgElement;
    'mnv-bignumber': HTMLMnvBignumberElement;
    'mnv-bignumbers': HTMLMnvBignumbersElement;
    'mnv-button': HTMLMnvButtonElement;
    'mnv-card': HTMLMnvCardElement;
    'mnv-col': HTMLMnvColElement;
    'mnv-container': HTMLMnvContainerElement;
    'mnv-divider': HTMLMnvDividerElement;
    'mnv-expositor': HTMLMnvExpositorElement;
    'mnv-expositor-base': HTMLMnvExpositorBaseElement;
    'mnv-figure': HTMLMnvFigureElement;
    'mnv-figure-caption': HTMLMnvFigureCaptionElement;
    'mnv-footer': HTMLMnvFooterElement;
    'mnv-grid': HTMLMnvGridElement;
    'mnv-hero': HTMLMnvHeroElement;
    'mnv-iconbutton': HTMLMnvIconbuttonElement;
    'mnv-list-card': HTMLMnvListCardElement;
    'mnv-mark': HTMLMnvMarkElement;
    'mnv-mob-button': HTMLMnvMobButtonElement;
    'mnv-mob-drawer': HTMLMnvMobDrawerElement;
    'mnv-mob-menu': HTMLMnvMobMenuElement;
    'mnv-navbar': HTMLMnvNavbarElement;
    'mnv-navbutton': HTMLMnvNavbuttonElement;
    'mnv-overline': HTMLMnvOverlineElement;
    'mnv-paragraph': HTMLMnvParagraphElement;
    'mnv-pre': HTMLMnvPreElement;
    'mnv-projeto': HTMLMnvProjetoElement;
    'mnv-row': HTMLMnvRowElement;
    'mnv-slide': HTMLMnvSlideElement;
    'mnv-slider': HTMLMnvSliderElement;
    'mnv-strong': HTMLMnvStrongElement;
    'mnv-subtitle': HTMLMnvSubtitleElement;
    'mnv-t': HTMLMnvTElement;
    'mnv-title': HTMLMnvTitleElement;
    'mnv-tooltip': HTMLMnvTooltipElement;
  }
}

declare namespace LocalJSX {
  interface AppHeropage extends JSXBase.HTMLAttributes<HTMLAppHeropageElement> {
    'data'?: any;
    'match'?: MatchResults;
    'numbers'?: any;
  }
  interface MnvAbout extends JSXBase.HTMLAttributes<HTMLMnvAboutElement> {
    'mainText'?: string;
    'mainTitle'?: string;
  }
  interface MnvAnchor extends JSXBase.HTMLAttributes<HTMLMnvAnchorElement> {
    'href'?: string;
  }
  interface MnvAppBar extends JSXBase.HTMLAttributes<HTMLMnvAppBarElement> {
    'color'?: 'inherit' | 'primary' | 'secondary' | 'default';
    'position'?: 'fixed' | 'sticky' | 'absolute' | 'static' | 'relative';
  }
  interface MnvBase extends JSXBase.HTMLAttributes<HTMLMnvBaseElement> {}
  interface MnvBg extends JSXBase.HTMLAttributes<HTMLMnvBgElement> {}
  interface MnvBignumber extends JSXBase.HTMLAttributes<HTMLMnvBignumberElement> {
    'numbers'?: any;
  }
  interface MnvBignumbers extends JSXBase.HTMLAttributes<HTMLMnvBignumbersElement> {
    'setNumbers'?: any[];
  }
  interface MnvButton extends JSXBase.HTMLAttributes<HTMLMnvButtonElement> {
    'contained'?: boolean;
    'disabled'?: boolean;
    'full'?: boolean;
    'marginzero'?: boolean;
    'outlined'?: boolean;
    'type'?: string;
  }
  interface MnvCard extends JSXBase.HTMLAttributes<HTMLMnvCardElement> {
    'button'?: string;
    'cardtitle'?: any;
    'link'?: string;
    'overline'?: any;
    'subtitle'?: any;
    'width'?: number;
  }
  interface MnvCol extends JSXBase.HTMLAttributes<HTMLMnvColElement> {
    'class'?: string;
  }
  interface MnvContainer extends JSXBase.HTMLAttributes<HTMLMnvContainerElement> {
    'lg'?: number;
    'md'?: number;
    'sm'?: number;
    'xl'?: number;
    'xs'?: number;
  }
  interface MnvDivider extends JSXBase.HTMLAttributes<HTMLMnvDividerElement> {}
  interface MnvExpositor extends JSXBase.HTMLAttributes<HTMLMnvExpositorElement> {
    'projects'?: any;
    'sectionSubtitle'?: string;
    'sectionTitle'?: string;
    'spotlight'?: any;
    'spotlightAlt'?: string;
  }
  interface MnvExpositorBase extends JSXBase.HTMLAttributes<HTMLMnvExpositorBaseElement> {
    'data'?: any;
  }
  interface MnvFigure extends JSXBase.HTMLAttributes<HTMLMnvFigureElement> {
    'alt'?: string;
    'src'?: string;
  }
  interface MnvFigureCaption extends JSXBase.HTMLAttributes<HTMLMnvFigureCaptionElement> {
    'alt'?: string;
    'bold'?: boolean;
    'boldspotlight'?: boolean;
    'boldtext'?: boolean;
    'italic'?: boolean;
    'italicspotlight'?: boolean;
    'italictext'?: boolean;
    'src'?: string;
  }
  interface MnvFooter extends JSXBase.HTMLAttributes<HTMLMnvFooterElement> {
    'locations'?: string[];
  }
  interface MnvGrid extends JSXBase.HTMLAttributes<HTMLMnvGridElement> {
    'block'?: boolean;
    'container'?: boolean;
    'indented'?: boolean;
    'item'?: boolean;
    'lg'?: string;
    'md'?: string;
    'sm'?: string;
    'spacing'?: number;
    'xl'?: string;
  }
  interface MnvHero extends JSXBase.HTMLAttributes<HTMLMnvHeroElement> {
    'background'?: string;
    'bgimg'?: string;
    'button'?: string;
    'herotitle'?: string;
  }
  interface MnvIconbutton extends JSXBase.HTMLAttributes<HTMLMnvIconbuttonElement> {
    'disabled'?: boolean;
    'type'?: string;
  }
  interface MnvListCard extends JSXBase.HTMLAttributes<HTMLMnvListCardElement> {
    'data'?: any;
    'name'?: string;
  }
  interface MnvMark extends JSXBase.HTMLAttributes<HTMLMnvMarkElement> {}
  interface MnvMobButton extends JSXBase.HTMLAttributes<HTMLMnvMobButtonElement> {
    'open'?: boolean;
  }
  interface MnvMobDrawer extends JSXBase.HTMLAttributes<HTMLMnvMobDrawerElement> {
    'open'?: boolean;
  }
  interface MnvMobMenu extends JSXBase.HTMLAttributes<HTMLMnvMobMenuElement> {
    'open'?: boolean;
    'setClass'?: string;
  }
  interface MnvNavbar extends JSXBase.HTMLAttributes<HTMLMnvNavbarElement> {
    'setClass'?: string;
  }
  interface MnvNavbutton extends JSXBase.HTMLAttributes<HTMLMnvNavbuttonElement> {
    'contained'?: boolean;
    'disabled'?: boolean;
    'marginzero'?: boolean;
    'outlined'?: boolean;
    'type'?: string;
  }
  interface MnvOverline extends JSXBase.HTMLAttributes<HTMLMnvOverlineElement> {}
  interface MnvParagraph extends JSXBase.HTMLAttributes<HTMLMnvParagraphElement> {
    /**
    * Altera o parágrafo para tamanho reduzido (body 2).
    */
    'bodytwo'?: boolean;
    /**
    * Ativa ou desativa estilização de capitular.
    */
    'capitular'?: boolean;
  }
  interface MnvPre extends JSXBase.HTMLAttributes<HTMLMnvPreElement> {}
  interface MnvProjeto extends JSXBase.HTMLAttributes<HTMLMnvProjetoElement> {
    'projButton'?: string;
    'projButtonUrl'?: string;
    'projImg'?: string;
    'projImgAlt'?: string;
    'projImgLegenda'?: string;
    'projText'?: string;
    'projTitle'?: string;
  }
  interface MnvRow extends JSXBase.HTMLAttributes<HTMLMnvRowElement> {}
  interface MnvSlide extends JSXBase.HTMLAttributes<HTMLMnvSlideElement> {
    'image'?: string;
  }
  interface MnvSlider extends JSXBase.HTMLAttributes<HTMLMnvSliderElement> {
    'cards'?: any[];
    'currentIndex'?: number;
    'height'?: number;
    'images'?: string[];
    'translateValue'?: number;
    'width'?: number;
  }
  interface MnvStrong extends JSXBase.HTMLAttributes<HTMLMnvStrongElement> {}
  interface MnvSubtitle extends JSXBase.HTMLAttributes<HTMLMnvSubtitleElement> {
    'type'?: string;
  }
  interface MnvT extends JSXBase.HTMLAttributes<HTMLMnvTElement> {
    'hierarchy'?: number;
    'level'?: string;
    'override'?: number;
    'white'?: boolean;
  }
  interface MnvTitle extends JSXBase.HTMLAttributes<HTMLMnvTitleElement> {
    'hierarchy'?: number;
    'level'?: string;
    'override'?: number;
    'white'?: boolean;
  }
  interface MnvTooltip extends JSXBase.HTMLAttributes<HTMLMnvTooltipElement> {
    'label'?: string;
    'length'?: string;
  }

  interface IntrinsicElements {
    'app-heropage': AppHeropage;
    'mnv-about': MnvAbout;
    'mnv-anchor': MnvAnchor;
    'mnv-app-bar': MnvAppBar;
    'mnv-base': MnvBase;
    'mnv-bg': MnvBg;
    'mnv-bignumber': MnvBignumber;
    'mnv-bignumbers': MnvBignumbers;
    'mnv-button': MnvButton;
    'mnv-card': MnvCard;
    'mnv-col': MnvCol;
    'mnv-container': MnvContainer;
    'mnv-divider': MnvDivider;
    'mnv-expositor': MnvExpositor;
    'mnv-expositor-base': MnvExpositorBase;
    'mnv-figure': MnvFigure;
    'mnv-figure-caption': MnvFigureCaption;
    'mnv-footer': MnvFooter;
    'mnv-grid': MnvGrid;
    'mnv-hero': MnvHero;
    'mnv-iconbutton': MnvIconbutton;
    'mnv-list-card': MnvListCard;
    'mnv-mark': MnvMark;
    'mnv-mob-button': MnvMobButton;
    'mnv-mob-drawer': MnvMobDrawer;
    'mnv-mob-menu': MnvMobMenu;
    'mnv-navbar': MnvNavbar;
    'mnv-navbutton': MnvNavbutton;
    'mnv-overline': MnvOverline;
    'mnv-paragraph': MnvParagraph;
    'mnv-pre': MnvPre;
    'mnv-projeto': MnvProjeto;
    'mnv-row': MnvRow;
    'mnv-slide': MnvSlide;
    'mnv-slider': MnvSlider;
    'mnv-strong': MnvStrong;
    'mnv-subtitle': MnvSubtitle;
    'mnv-t': MnvT;
    'mnv-title': MnvTitle;
    'mnv-tooltip': MnvTooltip;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


