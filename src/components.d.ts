/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AcademicCandidateDisplay {
    'data': any;
  }
  interface AccordionContainer {}
  interface AccordionDropdown {
    'header': string;
  }
  interface AddVarsityScores {
    'year': string;
  }
  interface AuxComp {}
  interface CampaignAim {}
  interface CampaignAimContainer {
    'campaignname': string;
  }
  interface CampaignNews {
    'newsid': string;
  }
  interface CampaignPage {
    'campaignId': number;
    'name': string;
  }
  interface CampaignTabs {
    'facebook': string;
    'newsid': string;
    'socials': string;
    'strategydoc': string;
  }
  interface CandidateDisplay {
    'data': any;
  }
  interface ChildComponent {
    'number': number;
  }
  interface CloudinaryApp {
    'public_id': string;
  }
  interface CreateVarsityData {
    'allowcreate': boolean;
    'allowupdate': boolean;
    'msltag': string;
    'test': boolean;
    'year': string;
  }
  interface ElectionsCandidates {
    'results': boolean;
  }
  interface ElectionsFooter {}
  interface FlexContainer {
    'alignx': string;
    'aligny': string;
    'direction': string;
    'fillContainer': boolean;
    'mobcolumn': boolean;
    'wrap': boolean;
  }
  interface FullwidthBeigeStrip {}
  interface FullwidthStrip {
    'color': string;
    'height': string;
  }
  interface GetInvolved {
    'typeform': string;
  }
  interface GridLanding {}
  interface GridLandingItem {
    'height': string;
    'label': string;
    'width': string;
  }
  interface ImageFitContainer {
    'alt': string;
    'classes': string[];
    'src': string;
  }
  interface ImageSliderAuto {
    'classes': string;
    'images': string[];
    'interval': number;
  }
  interface InnerTabContent {
    'active': boolean;
    'name': string;
  }
  interface InnerTabHeader {
    'active': boolean;
    'id': string;
    'name': string;
  }
  interface InnerTabsContainer {
    'innertab': boolean;
  }
  interface KclsuButton {
    'clicked': Function;
    'download': boolean;
    'emitid': string;
    'green': boolean;
    'link': string;
    'rounded': boolean;
    'small': boolean;
  }
  interface KclsuModal {
    'show': boolean;
  }
  interface KclsuTabsContainer {}
  interface LabelCard {
    'buttonLink': string;
    'buttonTitle': string;
    'cardtitle': string;
    'image': string;
    'reverse': boolean;
    'text': string;
  }
  interface LastYearScores {}
  interface LoadingSpinner {
    'show': boolean;
  }
  interface ModalBackdrop {
    'showbg': boolean;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface NewsCard {
    'newslink': string;
    'newstitle': string;
  }
  interface PageContent {}
  interface ParentComponent {
    'number': number;
  }
  interface PresetCard {
    'dimensions': string;
    'presetid': string;
    'presetname': string;
  }
  interface PresetControls {}
  interface PrimaryButton {
    'to': string;
  }
  interface ProfileCard {
    'cta': string;
    'image': string;
    'link': string;
    'name': string;
    'position': string;
    'secondcta': string;
    'secondlink': string;
  }
  interface PurpleButton {
    'link': string;
    'whitetext': boolean;
  }
  interface QuickLink {
    'to': string;
  }
  interface QuickLinks {
    'name': string;
  }
  interface SecondComponent {
    'animal': string;
  }
  interface ShowSupport {}
  interface SupportOption {
    'heading': string;
    'supportname': string;
  }
  interface SupportProgress {
    'current': any;
    'maxtotal': any;
    'supportname': string;
  }
  interface TabContent {
    'active': boolean;
    'name': string;
  }
  interface TabHeader {
    'active': boolean;
    'id': string;
    'name': string;
  }
  interface TabsContainer {
    'innertab': boolean;
  }
  interface VarsityLanding {
    'currentDate': { weekday: string; day: any; month: string; year: any; hours: any; minutes: any; };
    'year': string;
  }
  interface VarsityNextMatches {
    'data': any;
  }
  interface VarsityRace {
    'data': any;
    'target': number;
  }
  interface VarsityTotalScore {
    'scores': any;
  }
  interface VarsityUpcoming {
    'data': any;
    'showall': boolean;
  }
  interface VarsityWeather {}
  interface VideoBanner {
    'url': string;
  }
}

declare global {


  interface HTMLAcademicCandidateDisplayElement extends Components.AcademicCandidateDisplay, HTMLStencilElement {}
  const HTMLAcademicCandidateDisplayElement: {
    prototype: HTMLAcademicCandidateDisplayElement;
    new (): HTMLAcademicCandidateDisplayElement;
  };

  interface HTMLAccordionContainerElement extends Components.AccordionContainer, HTMLStencilElement {}
  const HTMLAccordionContainerElement: {
    prototype: HTMLAccordionContainerElement;
    new (): HTMLAccordionContainerElement;
  };

  interface HTMLAccordionDropdownElement extends Components.AccordionDropdown, HTMLStencilElement {}
  const HTMLAccordionDropdownElement: {
    prototype: HTMLAccordionDropdownElement;
    new (): HTMLAccordionDropdownElement;
  };

  interface HTMLAddVarsityScoresElement extends Components.AddVarsityScores, HTMLStencilElement {}
  const HTMLAddVarsityScoresElement: {
    prototype: HTMLAddVarsityScoresElement;
    new (): HTMLAddVarsityScoresElement;
  };

  interface HTMLAuxCompElement extends Components.AuxComp, HTMLStencilElement {}
  const HTMLAuxCompElement: {
    prototype: HTMLAuxCompElement;
    new (): HTMLAuxCompElement;
  };

  interface HTMLCampaignAimElement extends Components.CampaignAim, HTMLStencilElement {}
  const HTMLCampaignAimElement: {
    prototype: HTMLCampaignAimElement;
    new (): HTMLCampaignAimElement;
  };

  interface HTMLCampaignAimContainerElement extends Components.CampaignAimContainer, HTMLStencilElement {}
  const HTMLCampaignAimContainerElement: {
    prototype: HTMLCampaignAimContainerElement;
    new (): HTMLCampaignAimContainerElement;
  };

  interface HTMLCampaignNewsElement extends Components.CampaignNews, HTMLStencilElement {}
  const HTMLCampaignNewsElement: {
    prototype: HTMLCampaignNewsElement;
    new (): HTMLCampaignNewsElement;
  };

  interface HTMLCampaignPageElement extends Components.CampaignPage, HTMLStencilElement {}
  const HTMLCampaignPageElement: {
    prototype: HTMLCampaignPageElement;
    new (): HTMLCampaignPageElement;
  };

  interface HTMLCampaignTabsElement extends Components.CampaignTabs, HTMLStencilElement {}
  const HTMLCampaignTabsElement: {
    prototype: HTMLCampaignTabsElement;
    new (): HTMLCampaignTabsElement;
  };

  interface HTMLCandidateDisplayElement extends Components.CandidateDisplay, HTMLStencilElement {}
  const HTMLCandidateDisplayElement: {
    prototype: HTMLCandidateDisplayElement;
    new (): HTMLCandidateDisplayElement;
  };

  interface HTMLChildComponentElement extends Components.ChildComponent, HTMLStencilElement {}
  const HTMLChildComponentElement: {
    prototype: HTMLChildComponentElement;
    new (): HTMLChildComponentElement;
  };

  interface HTMLCloudinaryAppElement extends Components.CloudinaryApp, HTMLStencilElement {}
  const HTMLCloudinaryAppElement: {
    prototype: HTMLCloudinaryAppElement;
    new (): HTMLCloudinaryAppElement;
  };

  interface HTMLCreateVarsityDataElement extends Components.CreateVarsityData, HTMLStencilElement {}
  const HTMLCreateVarsityDataElement: {
    prototype: HTMLCreateVarsityDataElement;
    new (): HTMLCreateVarsityDataElement;
  };

  interface HTMLElectionsCandidatesElement extends Components.ElectionsCandidates, HTMLStencilElement {}
  const HTMLElectionsCandidatesElement: {
    prototype: HTMLElectionsCandidatesElement;
    new (): HTMLElectionsCandidatesElement;
  };

  interface HTMLElectionsFooterElement extends Components.ElectionsFooter, HTMLStencilElement {}
  const HTMLElectionsFooterElement: {
    prototype: HTMLElectionsFooterElement;
    new (): HTMLElectionsFooterElement;
  };

  interface HTMLFlexContainerElement extends Components.FlexContainer, HTMLStencilElement {}
  const HTMLFlexContainerElement: {
    prototype: HTMLFlexContainerElement;
    new (): HTMLFlexContainerElement;
  };

  interface HTMLFullwidthBeigeStripElement extends Components.FullwidthBeigeStrip, HTMLStencilElement {}
  const HTMLFullwidthBeigeStripElement: {
    prototype: HTMLFullwidthBeigeStripElement;
    new (): HTMLFullwidthBeigeStripElement;
  };

  interface HTMLFullwidthStripElement extends Components.FullwidthStrip, HTMLStencilElement {}
  const HTMLFullwidthStripElement: {
    prototype: HTMLFullwidthStripElement;
    new (): HTMLFullwidthStripElement;
  };

  interface HTMLGetInvolvedElement extends Components.GetInvolved, HTMLStencilElement {}
  const HTMLGetInvolvedElement: {
    prototype: HTMLGetInvolvedElement;
    new (): HTMLGetInvolvedElement;
  };

  interface HTMLGridLandingElement extends Components.GridLanding, HTMLStencilElement {}
  const HTMLGridLandingElement: {
    prototype: HTMLGridLandingElement;
    new (): HTMLGridLandingElement;
  };

  interface HTMLGridLandingItemElement extends Components.GridLandingItem, HTMLStencilElement {}
  const HTMLGridLandingItemElement: {
    prototype: HTMLGridLandingItemElement;
    new (): HTMLGridLandingItemElement;
  };

  interface HTMLImageFitContainerElement extends Components.ImageFitContainer, HTMLStencilElement {}
  const HTMLImageFitContainerElement: {
    prototype: HTMLImageFitContainerElement;
    new (): HTMLImageFitContainerElement;
  };

  interface HTMLImageSliderAutoElement extends Components.ImageSliderAuto, HTMLStencilElement {}
  const HTMLImageSliderAutoElement: {
    prototype: HTMLImageSliderAutoElement;
    new (): HTMLImageSliderAutoElement;
  };

  interface HTMLInnerTabContentElement extends Components.InnerTabContent, HTMLStencilElement {}
  const HTMLInnerTabContentElement: {
    prototype: HTMLInnerTabContentElement;
    new (): HTMLInnerTabContentElement;
  };

  interface HTMLInnerTabHeaderElement extends Components.InnerTabHeader, HTMLStencilElement {}
  const HTMLInnerTabHeaderElement: {
    prototype: HTMLInnerTabHeaderElement;
    new (): HTMLInnerTabHeaderElement;
  };

  interface HTMLInnerTabsContainerElement extends Components.InnerTabsContainer, HTMLStencilElement {}
  const HTMLInnerTabsContainerElement: {
    prototype: HTMLInnerTabsContainerElement;
    new (): HTMLInnerTabsContainerElement;
  };

  interface HTMLKclsuButtonElement extends Components.KclsuButton, HTMLStencilElement {}
  const HTMLKclsuButtonElement: {
    prototype: HTMLKclsuButtonElement;
    new (): HTMLKclsuButtonElement;
  };

  interface HTMLKclsuModalElement extends Components.KclsuModal, HTMLStencilElement {}
  const HTMLKclsuModalElement: {
    prototype: HTMLKclsuModalElement;
    new (): HTMLKclsuModalElement;
  };

  interface HTMLKclsuTabsContainerElement extends Components.KclsuTabsContainer, HTMLStencilElement {}
  const HTMLKclsuTabsContainerElement: {
    prototype: HTMLKclsuTabsContainerElement;
    new (): HTMLKclsuTabsContainerElement;
  };

  interface HTMLLabelCardElement extends Components.LabelCard, HTMLStencilElement {}
  const HTMLLabelCardElement: {
    prototype: HTMLLabelCardElement;
    new (): HTMLLabelCardElement;
  };

  interface HTMLLastYearScoresElement extends Components.LastYearScores, HTMLStencilElement {}
  const HTMLLastYearScoresElement: {
    prototype: HTMLLastYearScoresElement;
    new (): HTMLLastYearScoresElement;
  };

  interface HTMLLoadingSpinnerElement extends Components.LoadingSpinner, HTMLStencilElement {}
  const HTMLLoadingSpinnerElement: {
    prototype: HTMLLoadingSpinnerElement;
    new (): HTMLLoadingSpinnerElement;
  };

  interface HTMLModalBackdropElement extends Components.ModalBackdrop, HTMLStencilElement {}
  const HTMLModalBackdropElement: {
    prototype: HTMLModalBackdropElement;
    new (): HTMLModalBackdropElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  const HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLNewsCardElement extends Components.NewsCard, HTMLStencilElement {}
  const HTMLNewsCardElement: {
    prototype: HTMLNewsCardElement;
    new (): HTMLNewsCardElement;
  };

  interface HTMLPageContentElement extends Components.PageContent, HTMLStencilElement {}
  const HTMLPageContentElement: {
    prototype: HTMLPageContentElement;
    new (): HTMLPageContentElement;
  };

  interface HTMLParentComponentElement extends Components.ParentComponent, HTMLStencilElement {}
  const HTMLParentComponentElement: {
    prototype: HTMLParentComponentElement;
    new (): HTMLParentComponentElement;
  };

  interface HTMLPresetCardElement extends Components.PresetCard, HTMLStencilElement {}
  const HTMLPresetCardElement: {
    prototype: HTMLPresetCardElement;
    new (): HTMLPresetCardElement;
  };

  interface HTMLPresetControlsElement extends Components.PresetControls, HTMLStencilElement {}
  const HTMLPresetControlsElement: {
    prototype: HTMLPresetControlsElement;
    new (): HTMLPresetControlsElement;
  };

  interface HTMLPrimaryButtonElement extends Components.PrimaryButton, HTMLStencilElement {}
  const HTMLPrimaryButtonElement: {
    prototype: HTMLPrimaryButtonElement;
    new (): HTMLPrimaryButtonElement;
  };

  interface HTMLProfileCardElement extends Components.ProfileCard, HTMLStencilElement {}
  const HTMLProfileCardElement: {
    prototype: HTMLProfileCardElement;
    new (): HTMLProfileCardElement;
  };

  interface HTMLPurpleButtonElement extends Components.PurpleButton, HTMLStencilElement {}
  const HTMLPurpleButtonElement: {
    prototype: HTMLPurpleButtonElement;
    new (): HTMLPurpleButtonElement;
  };

  interface HTMLQuickLinkElement extends Components.QuickLink, HTMLStencilElement {}
  const HTMLQuickLinkElement: {
    prototype: HTMLQuickLinkElement;
    new (): HTMLQuickLinkElement;
  };

  interface HTMLQuickLinksElement extends Components.QuickLinks, HTMLStencilElement {}
  const HTMLQuickLinksElement: {
    prototype: HTMLQuickLinksElement;
    new (): HTMLQuickLinksElement;
  };

  interface HTMLSecondComponentElement extends Components.SecondComponent, HTMLStencilElement {}
  const HTMLSecondComponentElement: {
    prototype: HTMLSecondComponentElement;
    new (): HTMLSecondComponentElement;
  };

  interface HTMLShowSupportElement extends Components.ShowSupport, HTMLStencilElement {}
  const HTMLShowSupportElement: {
    prototype: HTMLShowSupportElement;
    new (): HTMLShowSupportElement;
  };

  interface HTMLSupportOptionElement extends Components.SupportOption, HTMLStencilElement {}
  const HTMLSupportOptionElement: {
    prototype: HTMLSupportOptionElement;
    new (): HTMLSupportOptionElement;
  };

  interface HTMLSupportProgressElement extends Components.SupportProgress, HTMLStencilElement {}
  const HTMLSupportProgressElement: {
    prototype: HTMLSupportProgressElement;
    new (): HTMLSupportProgressElement;
  };

  interface HTMLTabContentElement extends Components.TabContent, HTMLStencilElement {}
  const HTMLTabContentElement: {
    prototype: HTMLTabContentElement;
    new (): HTMLTabContentElement;
  };

  interface HTMLTabHeaderElement extends Components.TabHeader, HTMLStencilElement {}
  const HTMLTabHeaderElement: {
    prototype: HTMLTabHeaderElement;
    new (): HTMLTabHeaderElement;
  };

  interface HTMLTabsContainerElement extends Components.TabsContainer, HTMLStencilElement {}
  const HTMLTabsContainerElement: {
    prototype: HTMLTabsContainerElement;
    new (): HTMLTabsContainerElement;
  };

  interface HTMLVarsityLandingElement extends Components.VarsityLanding, HTMLStencilElement {}
  const HTMLVarsityLandingElement: {
    prototype: HTMLVarsityLandingElement;
    new (): HTMLVarsityLandingElement;
  };

  interface HTMLVarsityNextMatchesElement extends Components.VarsityNextMatches, HTMLStencilElement {}
  const HTMLVarsityNextMatchesElement: {
    prototype: HTMLVarsityNextMatchesElement;
    new (): HTMLVarsityNextMatchesElement;
  };

  interface HTMLVarsityRaceElement extends Components.VarsityRace, HTMLStencilElement {}
  const HTMLVarsityRaceElement: {
    prototype: HTMLVarsityRaceElement;
    new (): HTMLVarsityRaceElement;
  };

  interface HTMLVarsityTotalScoreElement extends Components.VarsityTotalScore, HTMLStencilElement {}
  const HTMLVarsityTotalScoreElement: {
    prototype: HTMLVarsityTotalScoreElement;
    new (): HTMLVarsityTotalScoreElement;
  };

  interface HTMLVarsityUpcomingElement extends Components.VarsityUpcoming, HTMLStencilElement {}
  const HTMLVarsityUpcomingElement: {
    prototype: HTMLVarsityUpcomingElement;
    new (): HTMLVarsityUpcomingElement;
  };

  interface HTMLVarsityWeatherElement extends Components.VarsityWeather, HTMLStencilElement {}
  const HTMLVarsityWeatherElement: {
    prototype: HTMLVarsityWeatherElement;
    new (): HTMLVarsityWeatherElement;
  };

  interface HTMLVideoBannerElement extends Components.VideoBanner, HTMLStencilElement {}
  const HTMLVideoBannerElement: {
    prototype: HTMLVideoBannerElement;
    new (): HTMLVideoBannerElement;
  };
  interface HTMLElementTagNameMap {
    'academic-candidate-display': HTMLAcademicCandidateDisplayElement;
    'accordion-container': HTMLAccordionContainerElement;
    'accordion-dropdown': HTMLAccordionDropdownElement;
    'add-varsity-scores': HTMLAddVarsityScoresElement;
    'aux-comp': HTMLAuxCompElement;
    'campaign-aim': HTMLCampaignAimElement;
    'campaign-aim-container': HTMLCampaignAimContainerElement;
    'campaign-news': HTMLCampaignNewsElement;
    'campaign-page': HTMLCampaignPageElement;
    'campaign-tabs': HTMLCampaignTabsElement;
    'candidate-display': HTMLCandidateDisplayElement;
    'child-component': HTMLChildComponentElement;
    'cloudinary-app': HTMLCloudinaryAppElement;
    'create-varsity-data': HTMLCreateVarsityDataElement;
    'elections-candidates': HTMLElectionsCandidatesElement;
    'elections-footer': HTMLElectionsFooterElement;
    'flex-container': HTMLFlexContainerElement;
    'fullwidth-beige-strip': HTMLFullwidthBeigeStripElement;
    'fullwidth-strip': HTMLFullwidthStripElement;
    'get-involved': HTMLGetInvolvedElement;
    'grid-landing': HTMLGridLandingElement;
    'grid-landing-item': HTMLGridLandingItemElement;
    'image-fit-container': HTMLImageFitContainerElement;
    'image-slider-auto': HTMLImageSliderAutoElement;
    'inner-tab-content': HTMLInnerTabContentElement;
    'inner-tab-header': HTMLInnerTabHeaderElement;
    'inner-tabs-container': HTMLInnerTabsContainerElement;
    'kclsu-button': HTMLKclsuButtonElement;
    'kclsu-modal': HTMLKclsuModalElement;
    'kclsu-tabs-container': HTMLKclsuTabsContainerElement;
    'label-card': HTMLLabelCardElement;
    'last-year-scores': HTMLLastYearScoresElement;
    'loading-spinner': HTMLLoadingSpinnerElement;
    'modal-backdrop': HTMLModalBackdropElement;
    'my-component': HTMLMyComponentElement;
    'news-card': HTMLNewsCardElement;
    'page-content': HTMLPageContentElement;
    'parent-component': HTMLParentComponentElement;
    'preset-card': HTMLPresetCardElement;
    'preset-controls': HTMLPresetControlsElement;
    'primary-button': HTMLPrimaryButtonElement;
    'profile-card': HTMLProfileCardElement;
    'purple-button': HTMLPurpleButtonElement;
    'quick-link': HTMLQuickLinkElement;
    'quick-links': HTMLQuickLinksElement;
    'second-component': HTMLSecondComponentElement;
    'show-support': HTMLShowSupportElement;
    'support-option': HTMLSupportOptionElement;
    'support-progress': HTMLSupportProgressElement;
    'tab-content': HTMLTabContentElement;
    'tab-header': HTMLTabHeaderElement;
    'tabs-container': HTMLTabsContainerElement;
    'varsity-landing': HTMLVarsityLandingElement;
    'varsity-next-matches': HTMLVarsityNextMatchesElement;
    'varsity-race': HTMLVarsityRaceElement;
    'varsity-total-score': HTMLVarsityTotalScoreElement;
    'varsity-upcoming': HTMLVarsityUpcomingElement;
    'varsity-weather': HTMLVarsityWeatherElement;
    'video-banner': HTMLVideoBannerElement;
  }
}

declare namespace LocalJSX {
  interface AcademicCandidateDisplay {
    'data'?: any;
  }
  interface AccordionContainer {}
  interface AccordionDropdown {
    'header'?: string;
  }
  interface AddVarsityScores {
    'year'?: string;
  }
  interface AuxComp {}
  interface CampaignAim {}
  interface CampaignAimContainer {
    'campaignname'?: string;
  }
  interface CampaignNews {
    'newsid'?: string;
  }
  interface CampaignPage {
    'campaignId'?: number;
    'name'?: string;
  }
  interface CampaignTabs {
    'facebook'?: string;
    'newsid'?: string;
    'socials'?: string;
    'strategydoc'?: string;
  }
  interface CandidateDisplay {
    'data'?: any;
  }
  interface ChildComponent {
    'number'?: number;
  }
  interface CloudinaryApp {
    'public_id'?: string;
  }
  interface CreateVarsityData {
    'allowcreate'?: boolean;
    'allowupdate'?: boolean;
    'msltag'?: string;
    'test'?: boolean;
    'year'?: string;
  }
  interface ElectionsCandidates {
    'results'?: boolean;
  }
  interface ElectionsFooter {}
  interface FlexContainer {
    'alignx'?: string;
    'aligny'?: string;
    'direction'?: string;
    'fillContainer'?: boolean;
    'mobcolumn'?: boolean;
    'wrap'?: boolean;
  }
  interface FullwidthBeigeStrip {}
  interface FullwidthStrip {
    'color'?: string;
    'height'?: string;
  }
  interface GetInvolved {
    'typeform'?: string;
  }
  interface GridLanding {}
  interface GridLandingItem {
    'height'?: string;
    'label'?: string;
    'width'?: string;
  }
  interface ImageFitContainer {
    'alt'?: string;
    'classes'?: string[];
    'src'?: string;
  }
  interface ImageSliderAuto {
    'classes'?: string;
    'images'?: string[];
    'interval'?: number;
  }
  interface InnerTabContent {
    'active'?: boolean;
    'name'?: string;
  }
  interface InnerTabHeader {
    'active'?: boolean;
    'id'?: string;
    'name'?: string;
    'onSelectInnerTab'?: (event: CustomEvent<any>) => void;
  }
  interface InnerTabsContainer {
    'innertab'?: boolean;
  }
  interface KclsuButton {
    'clicked'?: Function;
    'download'?: boolean;
    'emitid'?: string;
    'green'?: boolean;
    'link'?: string;
    'onEmitClick'?: (event: CustomEvent<any>) => void;
    'rounded'?: boolean;
    'small'?: boolean;
  }
  interface KclsuModal {
    'show'?: boolean;
  }
  interface KclsuTabsContainer {}
  interface LabelCard {
    'buttonLink'?: string;
    'buttonTitle'?: string;
    'cardtitle'?: string;
    'image'?: string;
    'reverse'?: boolean;
    'text'?: string;
  }
  interface LastYearScores {}
  interface LoadingSpinner {
    'show'?: boolean;
  }
  interface ModalBackdrop {
    'onExitModal'?: (event: CustomEvent<any>) => void;
    'showbg'?: boolean;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface NewsCard {
    'newslink'?: string;
    'newstitle'?: string;
  }
  interface PageContent {}
  interface ParentComponent {
    'number'?: number;
  }
  interface PresetCard {
    'dimensions'?: string;
    'onSelectPreset'?: (event: CustomEvent<any>) => void;
    'presetid'?: string;
    'presetname'?: string;
  }
  interface PresetControls {
    'onSubmitEdits'?: (event: CustomEvent<any>) => void;
  }
  interface PrimaryButton {
    'to'?: string;
  }
  interface ProfileCard {
    'cta'?: string;
    'image'?: string;
    'link'?: string;
    'name'?: string;
    'position'?: string;
    'secondcta'?: string;
    'secondlink'?: string;
  }
  interface PurpleButton {
    'link'?: string;
    'whitetext'?: boolean;
  }
  interface QuickLink {
    'to'?: string;
  }
  interface QuickLinks {
    'name'?: string;
  }
  interface SecondComponent {
    'animal'?: string;
  }
  interface ShowSupport {}
  interface SupportOption {
    'heading'?: string;
    'supportname'?: string;
  }
  interface SupportProgress {
    'current'?: any;
    'maxtotal'?: any;
    'supportname'?: string;
  }
  interface TabContent {
    'active'?: boolean;
    'name'?: string;
  }
  interface TabHeader {
    'active'?: boolean;
    'id'?: string;
    'name'?: string;
    'onSelectTab'?: (event: CustomEvent<any>) => void;
  }
  interface TabsContainer {
    'innertab'?: boolean;
  }
  interface VarsityLanding {
    'currentDate'?: { weekday: string; day: any; month: string; year: any; hours: any; minutes: any; };
    'year'?: string;
  }
  interface VarsityNextMatches {
    'data'?: any;
  }
  interface VarsityRace {
    'data'?: any;
    'target'?: number;
  }
  interface VarsityTotalScore {
    'scores'?: any;
  }
  interface VarsityUpcoming {
    'data'?: any;
    'showall'?: boolean;
  }
  interface VarsityWeather {}
  interface VideoBanner {
    'url'?: string;
  }

  interface IntrinsicElements {
    'academic-candidate-display': AcademicCandidateDisplay;
    'accordion-container': AccordionContainer;
    'accordion-dropdown': AccordionDropdown;
    'add-varsity-scores': AddVarsityScores;
    'aux-comp': AuxComp;
    'campaign-aim': CampaignAim;
    'campaign-aim-container': CampaignAimContainer;
    'campaign-news': CampaignNews;
    'campaign-page': CampaignPage;
    'campaign-tabs': CampaignTabs;
    'candidate-display': CandidateDisplay;
    'child-component': ChildComponent;
    'cloudinary-app': CloudinaryApp;
    'create-varsity-data': CreateVarsityData;
    'elections-candidates': ElectionsCandidates;
    'elections-footer': ElectionsFooter;
    'flex-container': FlexContainer;
    'fullwidth-beige-strip': FullwidthBeigeStrip;
    'fullwidth-strip': FullwidthStrip;
    'get-involved': GetInvolved;
    'grid-landing': GridLanding;
    'grid-landing-item': GridLandingItem;
    'image-fit-container': ImageFitContainer;
    'image-slider-auto': ImageSliderAuto;
    'inner-tab-content': InnerTabContent;
    'inner-tab-header': InnerTabHeader;
    'inner-tabs-container': InnerTabsContainer;
    'kclsu-button': KclsuButton;
    'kclsu-modal': KclsuModal;
    'kclsu-tabs-container': KclsuTabsContainer;
    'label-card': LabelCard;
    'last-year-scores': LastYearScores;
    'loading-spinner': LoadingSpinner;
    'modal-backdrop': ModalBackdrop;
    'my-component': MyComponent;
    'news-card': NewsCard;
    'page-content': PageContent;
    'parent-component': ParentComponent;
    'preset-card': PresetCard;
    'preset-controls': PresetControls;
    'primary-button': PrimaryButton;
    'profile-card': ProfileCard;
    'purple-button': PurpleButton;
    'quick-link': QuickLink;
    'quick-links': QuickLinks;
    'second-component': SecondComponent;
    'show-support': ShowSupport;
    'support-option': SupportOption;
    'support-progress': SupportProgress;
    'tab-content': TabContent;
    'tab-header': TabHeader;
    'tabs-container': TabsContainer;
    'varsity-landing': VarsityLanding;
    'varsity-next-matches': VarsityNextMatches;
    'varsity-race': VarsityRace;
    'varsity-total-score': VarsityTotalScore;
    'varsity-upcoming': VarsityUpcoming;
    'varsity-weather': VarsityWeather;
    'video-banner': VideoBanner;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'academic-candidate-display': LocalJSX.AcademicCandidateDisplay & JSXBase.HTMLAttributes<HTMLAcademicCandidateDisplayElement>;
      'accordion-container': LocalJSX.AccordionContainer & JSXBase.HTMLAttributes<HTMLAccordionContainerElement>;
      'accordion-dropdown': LocalJSX.AccordionDropdown & JSXBase.HTMLAttributes<HTMLAccordionDropdownElement>;
      'add-varsity-scores': LocalJSX.AddVarsityScores & JSXBase.HTMLAttributes<HTMLAddVarsityScoresElement>;
      'aux-comp': LocalJSX.AuxComp & JSXBase.HTMLAttributes<HTMLAuxCompElement>;
      'campaign-aim': LocalJSX.CampaignAim & JSXBase.HTMLAttributes<HTMLCampaignAimElement>;
      'campaign-aim-container': LocalJSX.CampaignAimContainer & JSXBase.HTMLAttributes<HTMLCampaignAimContainerElement>;
      'campaign-news': LocalJSX.CampaignNews & JSXBase.HTMLAttributes<HTMLCampaignNewsElement>;
      'campaign-page': LocalJSX.CampaignPage & JSXBase.HTMLAttributes<HTMLCampaignPageElement>;
      'campaign-tabs': LocalJSX.CampaignTabs & JSXBase.HTMLAttributes<HTMLCampaignTabsElement>;
      'candidate-display': LocalJSX.CandidateDisplay & JSXBase.HTMLAttributes<HTMLCandidateDisplayElement>;
      'child-component': LocalJSX.ChildComponent & JSXBase.HTMLAttributes<HTMLChildComponentElement>;
      'cloudinary-app': LocalJSX.CloudinaryApp & JSXBase.HTMLAttributes<HTMLCloudinaryAppElement>;
      'create-varsity-data': LocalJSX.CreateVarsityData & JSXBase.HTMLAttributes<HTMLCreateVarsityDataElement>;
      'elections-candidates': LocalJSX.ElectionsCandidates & JSXBase.HTMLAttributes<HTMLElectionsCandidatesElement>;
      'elections-footer': LocalJSX.ElectionsFooter & JSXBase.HTMLAttributes<HTMLElectionsFooterElement>;
      'flex-container': LocalJSX.FlexContainer & JSXBase.HTMLAttributes<HTMLFlexContainerElement>;
      'fullwidth-beige-strip': LocalJSX.FullwidthBeigeStrip & JSXBase.HTMLAttributes<HTMLFullwidthBeigeStripElement>;
      'fullwidth-strip': LocalJSX.FullwidthStrip & JSXBase.HTMLAttributes<HTMLFullwidthStripElement>;
      'get-involved': LocalJSX.GetInvolved & JSXBase.HTMLAttributes<HTMLGetInvolvedElement>;
      'grid-landing': LocalJSX.GridLanding & JSXBase.HTMLAttributes<HTMLGridLandingElement>;
      'grid-landing-item': LocalJSX.GridLandingItem & JSXBase.HTMLAttributes<HTMLGridLandingItemElement>;
      'image-fit-container': LocalJSX.ImageFitContainer & JSXBase.HTMLAttributes<HTMLImageFitContainerElement>;
      'image-slider-auto': LocalJSX.ImageSliderAuto & JSXBase.HTMLAttributes<HTMLImageSliderAutoElement>;
      'inner-tab-content': LocalJSX.InnerTabContent & JSXBase.HTMLAttributes<HTMLInnerTabContentElement>;
      'inner-tab-header': LocalJSX.InnerTabHeader & JSXBase.HTMLAttributes<HTMLInnerTabHeaderElement>;
      'inner-tabs-container': LocalJSX.InnerTabsContainer & JSXBase.HTMLAttributes<HTMLInnerTabsContainerElement>;
      'kclsu-button': LocalJSX.KclsuButton & JSXBase.HTMLAttributes<HTMLKclsuButtonElement>;
      'kclsu-modal': LocalJSX.KclsuModal & JSXBase.HTMLAttributes<HTMLKclsuModalElement>;
      'kclsu-tabs-container': LocalJSX.KclsuTabsContainer & JSXBase.HTMLAttributes<HTMLKclsuTabsContainerElement>;
      'label-card': LocalJSX.LabelCard & JSXBase.HTMLAttributes<HTMLLabelCardElement>;
      'last-year-scores': LocalJSX.LastYearScores & JSXBase.HTMLAttributes<HTMLLastYearScoresElement>;
      'loading-spinner': LocalJSX.LoadingSpinner & JSXBase.HTMLAttributes<HTMLLoadingSpinnerElement>;
      'modal-backdrop': LocalJSX.ModalBackdrop & JSXBase.HTMLAttributes<HTMLModalBackdropElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'news-card': LocalJSX.NewsCard & JSXBase.HTMLAttributes<HTMLNewsCardElement>;
      'page-content': LocalJSX.PageContent & JSXBase.HTMLAttributes<HTMLPageContentElement>;
      'parent-component': LocalJSX.ParentComponent & JSXBase.HTMLAttributes<HTMLParentComponentElement>;
      'preset-card': LocalJSX.PresetCard & JSXBase.HTMLAttributes<HTMLPresetCardElement>;
      'preset-controls': LocalJSX.PresetControls & JSXBase.HTMLAttributes<HTMLPresetControlsElement>;
      'primary-button': LocalJSX.PrimaryButton & JSXBase.HTMLAttributes<HTMLPrimaryButtonElement>;
      'profile-card': LocalJSX.ProfileCard & JSXBase.HTMLAttributes<HTMLProfileCardElement>;
      'purple-button': LocalJSX.PurpleButton & JSXBase.HTMLAttributes<HTMLPurpleButtonElement>;
      'quick-link': LocalJSX.QuickLink & JSXBase.HTMLAttributes<HTMLQuickLinkElement>;
      'quick-links': LocalJSX.QuickLinks & JSXBase.HTMLAttributes<HTMLQuickLinksElement>;
      'second-component': LocalJSX.SecondComponent & JSXBase.HTMLAttributes<HTMLSecondComponentElement>;
      'show-support': LocalJSX.ShowSupport & JSXBase.HTMLAttributes<HTMLShowSupportElement>;
      'support-option': LocalJSX.SupportOption & JSXBase.HTMLAttributes<HTMLSupportOptionElement>;
      'support-progress': LocalJSX.SupportProgress & JSXBase.HTMLAttributes<HTMLSupportProgressElement>;
      'tab-content': LocalJSX.TabContent & JSXBase.HTMLAttributes<HTMLTabContentElement>;
      'tab-header': LocalJSX.TabHeader & JSXBase.HTMLAttributes<HTMLTabHeaderElement>;
      'tabs-container': LocalJSX.TabsContainer & JSXBase.HTMLAttributes<HTMLTabsContainerElement>;
      'varsity-landing': LocalJSX.VarsityLanding & JSXBase.HTMLAttributes<HTMLVarsityLandingElement>;
      'varsity-next-matches': LocalJSX.VarsityNextMatches & JSXBase.HTMLAttributes<HTMLVarsityNextMatchesElement>;
      'varsity-race': LocalJSX.VarsityRace & JSXBase.HTMLAttributes<HTMLVarsityRaceElement>;
      'varsity-total-score': LocalJSX.VarsityTotalScore & JSXBase.HTMLAttributes<HTMLVarsityTotalScoreElement>;
      'varsity-upcoming': LocalJSX.VarsityUpcoming & JSXBase.HTMLAttributes<HTMLVarsityUpcomingElement>;
      'varsity-weather': LocalJSX.VarsityWeather & JSXBase.HTMLAttributes<HTMLVarsityWeatherElement>;
      'video-banner': LocalJSX.VideoBanner & JSXBase.HTMLAttributes<HTMLVideoBannerElement>;
    }
  }
}


