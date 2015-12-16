/*!CK:2528863871!*//*1450114443,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["3BTQZ"]); }

__d("ProfileDOMID",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ABOVE_HEADER_TIMELINE:"pagelet_above_header_timeline",ABOVE_HEADER_TIMELINE_PLACEHOLDER:"above_header_timeline_placeholder",COVER:"fbProfileCover",MAIN_COLUMN:"pagelet_main_column",MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal",MAIN_COLUMN_PERSONAL_OTHER:"pagelet_main_column_personal_other",RIGHT_SIDEBAR:"pagelet_right_sidebar",TAB_LOAD_INDICATOR:"tab_load_indicator",TOP_SECTION:"timeline_top_section",PREFIX_MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal_"};},null);
__d("ProfileOverviewDOMID",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={MEDLEY_ROOT:"timeline-medley",PREFIX_APP_COLLECTION:"pagelet_timeline_app_collection_",PREFIX_COLLECTION_WRAPPER:"collection_wrapper_",PREFIX_MEDLEY:"pagelet_timeline_medley_",PREFIX_MEDLEY_HEADER:"medley_header_",PREFIX_RECOMMENDATION:"pagelet_recommendation_"};},null);
__d("ProfileTabConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ALBUM:"album",ALBUMS:"albums",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",INFO:"info",LIKES:"likes",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RESUME:"resume",REVIEWS:"reviews",SAVED_FOR_LATER:"saved",SPORTS:"sports",TAGGED_NOTES:"notes_tagged",TIMELINE:"timeline",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video"};},null);
__d("TimelineDOMID",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER_CONTAINER:"timeline_composer_container",MEMORIES:"pagelet_timeline_memories",RECENT:"pagelet_timeline_recent",RECENT_CAPSULE_CONTAINER:"recent_capsule_container",STICKY_HEADER:"timeline_sticky_header",TAB_CONTENT:"timeline_tab_content",TAB_CONTENT_EXTRA:"timeline_tab_content_extra",UNDER_COMPOSER:"timeline_under_composer",UNSEEN_STORIES_INDICATOR:"recent_unseen_stories_indicator",PREFIX_MONTH_ALL:"pagelet_timeline_month_all_",PREFIX_MONTH_EXPAND:"pagelet_timeline_month_expand_",PREFIX_YEAR:"pagelet_timeline_year_",SUFFIX_MORE_PAGER:"_more_pager"};},null);
__d("TimelineScrollJankEventTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BOTTOM_OUT:"bottom_out",JUMP_TO_NOWHERE:"jump_to_nowhere",UNBALANCED_COLUMNS:"unbalanced_columns"};},null);
__d("TimelineScrubberKey",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={MONTH:"month",RECENT_ACTIVITY:"recent",YEAR:"year"};},null);
__d('ProfileTimelineUITypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(){this.clear();}k.prototype.log=function(){i.log('logger:ProfileTimelineUILoggerConfig',this.$ProfileTimelineUITypedLogger1,h.BASIC);};k.prototype.logVital=function(){i.log('logger:ProfileTimelineUILoggerConfig',this.$ProfileTimelineUITypedLogger1,h.VITAL);};k.prototype.clear=function(){this.$ProfileTimelineUITypedLogger1={};return this;};k.prototype.updateData=function(m){this.$ProfileTimelineUITypedLogger1=babelHelpers._extends({},this.$ProfileTimelineUITypedLogger1,m);return this;};k.prototype.setEvent=function(m){this.$ProfileTimelineUITypedLogger1.event=m;return this;};k.prototype.setEventMetadata=function(m){this.$ProfileTimelineUITypedLogger1.event_metadata=i.serializeMap(m);return this;};k.prototype.setProfileID=function(m){this.$ProfileTimelineUITypedLogger1.profile_id=m;return this;};k.prototype.setRelationshipType=function(m){this.$ProfileTimelineUITypedLogger1.relationship_type=m;return this;};k.prototype.setUIComponent=function(m){this.$ProfileTimelineUITypedLogger1.ui_component=m;return this;};k.prototype.setVC=function(m){this.$ProfileTimelineUITypedLogger1.vc=m;return this;};var l={event:true,event_metadata:true,profile_id:true,relationship_type:true,ui_component:true,vc:true};f.exports=k;},null);
__d('ProfileTabUtils',['ProfileScrubberConfig','ProfileTabConst'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={isActivityLogTab:function(k){return (k===i.ALL_ACTIVITY||k===i.APPROVAL);},isOverviewTab:function(k){return (k===i.INFO||k===i.OVERVIEW);},isTimelineTab:function(k){return (!k||k===i.TIMELINE||k===i.WALL);},tabHasFixedAds:function(k){return (!j.isTimelineTab(k)||!!h.noScrubberOnTimeline);},tabHasScrubber:function(k){if(j.isTimelineTab(k))return !h.noScrubberOnTimeline;return j.isActivityLogTab(k);}};j.tabHasStickyHeader=j.isTimelineTab;f.exports=j;},null);
__d('ProfileNavRef',['LinkController','Parent','URI'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k='pnref',l='data-'+k,m=false;function n(o){var p=[];o=i.byAttribute(o,l);while(o){p.unshift(o.getAttribute(l));o=i.byAttribute(o.parentNode,l);}return p.join('.');}g.track=function(){if(m)return;m=true;h.registerHandler(function(o){var p=n(o);if(p)o.href=new j(o.href).addQueryData(k,p).toString();});};},null);
__d('TimelineComponentKeys',['ImmutableObject'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=new h({ADS:'ads',ASYNC_NAV:'async_nav',CONTENT:'content',COVER_NAV:'cover_nav',ESCAPE_HATCH:'escape_hatch',LOGGING:'logging',NAV:'nav',SCRUBBER:'scrubber',STICKY_COLUMN:'sticky_column',STICKY_HEADER:'sticky_header',STICKY_HEADER_NAV:'sticky_header_nav'});f.exports=i;},null);
__d('TimelineConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={DS_LOADED:'timeline-capsule-loaded',DS_COLUMN_HEIGHT_DIFFERENTIAL:'timeline-column-diff-height',SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_EXPAND:'TimelineConstants/sectionExpand',SECTION_LOADING:'TimelineConstants/sectionLoading',SECTION_LOADED:'TimelineConstants/sectionLoaded',SECTION_FULLY_LOADED:'TimelineConstants/sectionFullyLoaded',SECTION_REGISTERED:'TimelineConstants/sectionRegistered',UNIT_SEGMENT_LOADED:'TimelineConstants/unitSegmentLoaded'};f.exports=h;},null);
__d('TimelineLegacySections',['CSS','DOM','fbt','getElementText'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={},m={},n=false,o=[],p={},q={get:function(r){return m.hasOwnProperty(r)?m[r]:null;},getAll:function(){return m;},remove:function(r){for(var s=0;s<o.length;s++)if(o[s]===r){o[s]=null;break;}delete m[r];},removeAll:function(){m={};},set:function(r,s){m[r]=s;},addOnVisible:function(r,s){p[r]=s;},destroyOnVisible:function(r){var s=p[r];if(s){s.remove();i.remove(s.getElement());}p[r]=null;},removeOnVisible:function(r){var s=p[r];if(s)s.remove();},removeAllOnVisibles:function(){Object.keys(p).forEach((function(r){return this.removeOnVisible(r);}).bind(this));},getOnVisible:function(r){return p[r];},setMainSectionOrder:function(r,s){o[s]=r;},getMainSectionOrder:function(){return o;},addLoadPagelet:function(r,s){l[r]=s;},cancelLoadPagelet:function(r){if(l[r])l[r].cancel();},cancelLoadPagelets:function(){Object.keys(l).forEach((function(r){return this.cancelLoadPagelet(r);}).bind(this));l={};},shouldForceNoFriendActivity:function(){return n;},forceNoFriendActivity:function(){n=true;},collapsePlaceHolderHeaders:function(){var r,s,t=false;for(var u=0;u<o.length;u++){var v=o[u];if(!v)continue;var w=q.get(v);if(!w)continue;if(w.canScrollLoad()||w.isLoaded()){if(!w.isLoaded()){h.removeClass(w.getNode(),'fbTimelineTimePeriodSuppressed');h.addClass(w.getNode(),'fbTimelineTimePeriodUnexpanded');}if(r&&s){this.combineSectionHeaders(r,s);if(t)r.deactivateScrollLoad();t=true;}r=null;s=null;continue;}else if(r){s=w;w.deactivateScrollLoad();}else{r=w;s=w;if(t)w.activateScrollLoad();}h.removeClass(w.getNode(),'fbTimelineTimePeriodSuppressed');h.addClass(w.getNode(),'fbTimelineTimePeriodUnexpanded');}},combineSectionHeaders:function(r,s){h.removeClass(s.getNode(),'fbTimelineTimePeriodUnexpanded');h.addClass(s.getNode(),'fbTimelineTimePeriodSuppressed');var t=i.find(r.getNode(),'span.sectionLabel'),u=i.find(s.getNode(),'span.sectionLabel');if(!u.getAttribute('data-original-label'))u.setAttribute('data-original-label',k(u));if(t.getAttribute('data-month')&&u.getAttribute('data-month')&&t.getAttribute('data-year')==u.getAttribute('data-year')){i.setContent(u,j._("Mostrar {month1} a {month2} de {year}",[j.param('month1',u.getAttribute('data-month')),j.param('month2',t.getAttribute('data-month')),j.param('year',t.getAttribute('data-year'))]));}else if(t.getAttribute('data-year')!==u.getAttribute('data-year')){i.setContent(u,j._("Mostrar  {year1} a {year2}",[j.param('year1',u.getAttribute('data-year')),j.param('year2',t.getAttribute('data-year'))]));}else i.setContent(u,j._("Mostrar {year}",[j.param('year',u.getAttribute('data-year'))]));}};f.exports=q;},null);
__d('TimelineScrollJankLogger',['Banzai','BanzaiLogger','TimelineScrollJankEventTypes','debounceCore','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m='TimelineScrollJankLoggerConfig',n='timeline_scroll_jank',o=50;function p(event,s,t,u){i.log(m,{event:event,profileid:s,currentsection:u,sessionid:t});}var q=h.isEnabled(n)?k(p,o):l,r={logBottomOut:q.bind(null,j.BOTTOM_OUT)};f.exports=r;},null);
__d('TimelineController',['Arbiter','BlueBar','CSS','DataStore','DOMQuery','Event','ProfileDOMID','ProfileNavRef','ProfileTabConst','ProfileTabUtils','Run','ScrollingPager','TidyArbiter','TimelineComponentKeys','TimelineConstants','TimelineLegacySections','TimelineScrollJankLogger','TimelineScrubberKey','UITinyViewportAction','Vector','$','forEachObject','ge','queryThenMutateDOM','randomInt','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga){if(c.__markCompiled)c.__markCompiled();var ha=358,ia=48,ja=740,ka=5,la='top',ma='paddingTop',na='paddingTop',oa=null,pa=false,qa=null,ra=null,sa,ta={},ua={},va=[],wa=null,xa=0,ya=aa.getViewportDimensions(),za=0,ab=false,bb=false,cb=false;function db(pb,qb,rb){rb=rb||[];if(ta[pb])return ta[pb][qb].apply(ta[pb],rb);ua[pb]=ua[pb]||{};ua[pb][qb]=rb;return false;}function eb(){if(ab)ab=ib(da('rightCol'),na,ob.getCurrentScrubber());if(bb)bb=ib(ba(n.ABOVE_HEADER_TIMELINE),la);if(cb)cb=ib(i.getBar(),ma);}function fb(){xa=aa.getScrollPosition();var pb=xa.y+ya.y,qb=aa.getDocumentDimensions().y-pb;if(qb<ka)x.logBottomOut(qa,sa);}function gb(){var pb=za===0||xa.y>=za;eb();if(q.tabHasStickyHeader(oa))db(u.STICKY_HEADER,'toggle',[pb]);db(u.CONTENT,'checkCurrentSectionChange');}function hb(){ea(fb,gb,'TimelineController/scrollListener');}function ib(pb,qb,rb){if(!pb)return false;if(xa.y<=0){jb(pb,qb);return false;}if(rb&&j.hasClass(rb.getRoot(),'fixed_elem')){jb(pb,qb);return false;}var sb=parseInt(pb.style[qb],10)||0;if(xa.y<sb){j.addClass(pb,'timeline_fixed');pb.style[qb]=xa.y+'px';}else j.removeClass(pb,'timeline_fixed');return true;}function jb(pb,qb){pb.style[qb]='0px';j.removeClass(pb,'timeline_fixed');}function kb(){ya=aa.getViewportDimensions();}function lb(){ea(kb,function(){db(u.ADS,'adjustAdsToFit');db(u.STICKY_HEADER_NAV,'adjustMenuHeights');},'TimelineController/resize');}function mb(event,pb){var qb=aa.getScrollPosition();pb=Math.min(pb,qb.y);var rb=da('rightCol');if(rb){rb.style[na]=pb+'px';ab=true;}var sb=ba(n.ABOVE_HEADER_TIMELINE);if(sb.firstChild){var tb=ba(n.ABOVE_HEADER_TIMELINE_PLACEHOLDER);tb.style.height=sb.offsetHeight+'px';sb.style[la]=pb+'px';bb=true;}cb=z.isTinyHeight();if(cb)i.getBar().style[ma]=pb+'px';h.inform('reflow');}function nb(){while(va.length)va.pop().remove();ca(ta,function(qb,rb){qb.reset&&qb.reset();});oa=null;qa=null;sa=null;ta={};ua={};wa=null;pa=false;za=0;bb=false;if(ab){var pb=da('rightCol');if(pb)jb(pb,na);}ab=false;if(cb){jb(i.getBar(),ma);cb=false;}k.purge(v.DS_LOADED);k.purge(v.DS_COLUMN_HEIGHT_DIFFERENTIAL);}var ob={init:function(pb,qb,rb){if(pa)return;if(q.isTimelineTab(qb))qb=p.TIMELINE;pa=true;qa=pb;sa=fa(Number.MAX_SAFE_INTEGER).toString();ra=rb.relationship_type;va.push(m.listen(window,'scroll',hb),m.listen(window,'resize',lb));ga(t.subscribe('TimelineCover/coverCollapsed',mb));o.track();r.onLeave(nb);ob.registerCurrentKey(qb);var sb='#'+y.WAY_BACK;if(window.location.hash===sb)var tb=h.subscribe(v.SECTION_FULLY_LOADED,function(){db(u.CONTENT,'navigateToSection',[y.WAY_BACK]);tb.unsubscribe();});},setAdsTracking:function(pb){db(u.ADS,'start',[pb]);},registerCurrentKey:function(pb){oa=pb;wa=pb!==p.MAP&&aa.getViewportDimensions().y<ja&&q.tabHasScrubber(pb);wa=wa||i.getBar().offsetTop;db(u.ADS,'setShortMode',[wa]);db(u.ADS,'updateCurrentKey',[pb]);db(u.ADS,'adjustAdsToFit');db(u.COVER_NAV,'handleTabChange',[pb]);db(u.SCRUBBER,'handleTabChange',[pb]);db(u.ESCAPE_HATCH,'handleTabChange',[pb]);db(u.STICKY_COLUMN,'adjust');za=q.isTimelineTab(pb)?ha-ia:0;db(u.STICKY_HEADER,'handleTabChange',[pb]);hb();},getProfileID:function(){return qa;},getRelationshipType:function(){return ra;},getCurrentKey:function(){return oa;},getCurrentScrubber:function(){return ta[u.SCRUBBER];},getCurrentStickyHeaderNav:function(){return ta[u.STICKY_HEADER_NAV];},scrubberHasLoaded:function(pb){j.conditionClass(pb.getRoot(),'fixed_elem',!wa);db(u.ADS,'registerScrubber',[pb]);},scrubberHasChangedState:function(){db(u.ADS,'adjustAdsToFit');},scrubberWasClicked:function(pb){db(u.LOGGING,'logScrubberClick',[pb]);},stickyHeaderNavWasClicked:function(pb){db(u.LOGGING,'logStickyHeaderNavClick',[pb]);},sectionHasChanged:function(pb,qb){var rb=[pb,qb];db(u.STICKY_HEADER_NAV,'updateSection',rb);db(u.SCRUBBER,'updateSection',rb);db(u.ADS,'loadAdsIfEnoughTimePassed');db(u.LOGGING,'logSectionChange',rb);},navigateToSection:function(pb){db(u.CONTENT,'navigateToSection',[pb]);},adjustStickyHeaderWidth:function(){db(u.STICKY_HEADER,'adjustWidth');},hideStickyHeaderNavSectionMenu:function(){db(u.STICKY_HEADER_NAV,'hideSectionMenu');},register:function(pb,qb){ta[pb]=qb;if(ua[pb]){ca(ua[pb],function(rb,sb){db(pb,sb,rb);});delete ua[pb];}},adjustScrollingPagerBuffer:function(pb,qb){var rb=k.get(v.DS_COLUMN_HEIGHT_DIFFERENTIAL,qb);if(rb){var sb=s.getInstance(pb);sb&&sb.setBuffer(sb.getBuffer()+Math.abs(rb));}},runOnceWhenSectionFullyLoaded:function(pb,qb,rb){var sb=w.get(qb),tb=false;if(sb){var ub=l.scry(sb.getNode(),'.fbTimelineCapsule');tb=ub.some(function(wb){var xb=k.get(v.DS_LOADED,wb.id);if(parseInt(xb,10)>=parseInt(rb,10)){pb();return true;}});}if(!tb)var vb=h.subscribe(v.SECTION_FULLY_LOADED,function(wb,xb){if(xb.scrubberKey===qb&&xb.pageIndex===rb){pb();vb.unsubscribe();}});}};f.exports=ob;},null);
__d('ProfileTimelineUILogger',['Banzai','ProfileTimelineUITypedLogger','TimelineController'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k='profile_timeline_ui';function l(event,n,o){var p=j.getProfileID(),q=j.getRelationshipType();if(h.isEnabled(k)&&!!p&&!!q)new i().setEvent(event).setUIComponent(n).setProfileID(p).setRelationshipType(q).setEventMetadata(o).log();}var m={logCoverNavItemClick:function(n){l('click','cover_nav_item',{tab_key:n});},logCoverNavMoreItemClick:function(n){l('click','cover_nav_more_item',{tab_key:n});},logScrubberClick:function(n){l('click','scrubber',{section_key:n});},logSectionExpanderClick:function(n){l('click','section_expander',{section_key:n});},logStickyHeaderImpression:function(){l('view','sticky_header',{});},logStickyHeaderNavItemClick:function(n){l('click','sticky_header_nav_item',{tab_key:n});},logStickyHeaderScrubberClick:function(n){l('click','sticky_header_scrubber',{section_key:n});}};f.exports=m;},null);
__d('TimelineSmartInsert',['Run','UserAgent_DEPRECATED','Vector'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=100;function l(r){if(r==='viewport')return j.getViewportDimensions().y;return r;}var m=false,n=false;function o(){if(n)return;h.onLeave(p);n=true;}function p(){m=false;n=false;}var q={run:function(r,s,t){o();if(!m||i.ie()<=8){s();return;}var u=r.offsetHeight;s();var v=r.offsetHeight,w=j.getScrollPosition().y,x=j.getElementPosition(r).y;if(v!==u&&x<w&&x+u<w+l(t||k))window.scrollBy(0,v-u);},enable:function(){m=true;}};f.exports=q;},null);