/*!CK:2723256977!*//*1449710304,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Y+N+a"]); }

__d('EgoAdsObjectSet',['DOM','csx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(){'use strict';this._allEgoUnits=[];this._egoUnits=[];}j.prototype.init=function(l){'use strict';this._allEgoUnits=l;this._egoUnits=[];this._allEgoUnits.forEach(function(m){var n=k(m);if(!n||!n.holdout)this._egoUnits.push(m);},this);};j.prototype.getCount=function(){'use strict';return this._egoUnits.length;};j.prototype.forEach=function(l,m){'use strict';this._egoUnits.forEach(l,m);};j.prototype.getUnit=function(l){'use strict';return this._egoUnits[l];};j.prototype.getHoldoutAdIDsForSpace=function(l,m){'use strict';if(!l||!m)return [];var n=[];for(var o=0;l>0&&o<this._allEgoUnits.length;o++){var p=this._allEgoUnits[o],q=m(p),r=k(p);if(l>=q&&r&&r.holdout)n.push(r.adid);l-=q;}return n;};j.prototype.getHoldoutAdIDsForNumAds=function(l){'use strict';l=Math.min(l,this._allEgoUnits.length);var m=[];for(var n=0;n<l;n++){var o=this._allEgoUnits[n],p=k(o);if(p&&p.holdout)m.push(p.adid);}return m;};function k(l){var m=h.scry(l,"div._4u8")[0],n=m&&m.getAttribute('data-ad');return n&&JSON.parse(n)||undefined;}f.exports=j;},null);
__d('rayInterceptsBox',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l){var m=Object.keys(k);l.forEach(function(n){!(m.indexOf(n)!==-1)?h(0):undefined;!(typeof k[n]==='number')?h(0):undefined;});}var j={check:function(k,l){i(k,['minX','maxX','minY','maxY']);i(l,['x','y','dx','dy']);!(k.maxX>k.minX&&k.maxY>k.minY)?h(0):undefined;if(l.dx===0&&l.dy===0)return false;if(l.x>=k.minX&&l.x<=k.maxX&&l.y>=k.minY&&l.y<=k.maxY)return true;var m=(k.minX-l.x)/l.dx,n=(k.maxX-l.x)/l.dx,o=(k.minY-l.y)/l.dy,p=(k.maxY-l.y)/l.dy,q=Math.max(Math.min(m,n),Math.min(o,p)),r=Math.min(Math.max(m,n),Math.max(o,p));if(q<0)return false;if(q>r)return false;return true;}};f.exports=j;},null);
__d('AdsMouseStateStore',['Arbiter','DOM','Event','Vector','$','invariant','keyMirror','rayInterceptsBox','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q=30,r=500,s=n({STATIONARY:null,INTENT:null,HOVER:null,NO_INTENT:null}),t,u,v,w,x;function y(){t=s.STATIONARY;u=0;v=0;w=Date.now();x='pagelet_ego_pane';}y();function z(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(ba){var ca=Math.random()*1000;return {x:ca,y:ca};}}var aa=Object.assign(new h(),{getState:function(){return t;},updateRhcID:function(ba){!l(ba)?m(0):undefined;x=ba;},getRhcID:function(){return x;},onPageTransition:function(event){y();},onMouseMove:function(event){this.calculateState(z(event));},__updateMousePos:function(ba){u=ba.x;v=ba.y;},isRhcPresent:function(){if(!i.scry(document.body,'#'+x).length)return false;var ba=this.getRhcDimensions();return ba.y>0&&ba.x>0;},getRhc:function(){return l(x);},getRhcPosition:function(){return k.getElementPosition(this.getRhc());},getRhcScreenPos:function(){var ba=k.getScrollPosition(),ca=this.getRhcPosition();return {x:ca.x-ba.x,y:ca.y-ba.y};},getRhcDimensions:function(){return k.getElementDimensions(this.getRhc());},getRhcBoundingBox:function(){var ba=this.getRhcDimensions(),ca=this.getRhcScreenPos();return {minX:ca.x,maxX:ca.x+ba.x,minY:ca.y,maxY:ca.y+ba.y};},isPosContainedInRhc:function(ba){var ca=this.getRhcBoundingBox();return (ba.x>=ca.minX&&ba.x<=ca.maxX&&ba.y>=ca.minY&&ba.y<=ca.maxY);},hasMovedMinDistance:function(ba){var ca=ba.x-u,da=ba.y-v;return ca*ca+da*da>=q*q;},tooSoon:function(){return Date.now()-w<r;},_updateTime:function(){w=Date.now();},calculateState:function(ba){if(this.tooSoon())return;this._updateTime();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(ba)){this.transitionToState(s.HOVER);this.__updateMousePos(ba);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(ba)){this.transitionToState(s.STATIONARY);return;}var ca=this.isMovingTowardsRhc(ba)?s.INTENT:s.NO_INTENT;this.transitionToState(ca);this.__updateMousePos(ba);this.scheduleCheckup();},isMovingTowardsRhc:function(ba){var ca={x:u,y:v};if(this.isPosContainedInRhc(ca))return true;var da=this.getRhcBoundingBox(),ea={x:u,y:v,dx:ba.x-u,dy:ba.y-v};return o.check(da,ea);},scheduleCheckup:function(){var ba={x:u,y:v};setTimeout((function(){this.calculateState(ba);}).bind(this),r*1.5);},transitionToState:function(ba){if(ba===t)return;t=ba;aa.inform('change');}});j.listen(document,'mousemove',p(aa.onMouseMove.bind(aa),r));h.subscribe('page_transition',aa.onPageTransition);aa.STATES=s;aa.MIN_MOVE_DISTANCE=q;aa.THROTTLE_TIME=r;f.exports=aa;},null);
__d('TickerController',['Animation','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=1,u=2,v=3,w=4,x=15000,y=null,z={},aa={},ba={setActiveInstance:function(ca){y=ca;},getActiveInstance:function(){return y;},clearRHCplaceholder:function(){z.pagelet_rhc_ticker=null;},registerInstance:function(ca,da,ea){aa[ca.id]={root:ca,scrollable_area:da,config:ea};k.loadModules(["TickerStoryList"],function(fa){return (new fa(ca,da,ea));});},callWithInstance:function(ca,da){if(!ca)return;var ea=n.byClass(q(ca),'fbFeedTicker');k.loadModules(["TickerStoryList"],function(fa){var ga=ea?fa.instances()[ea.id]:null,ha=aa[ea.id];if(!ga&&ha){ga=new fa(ha.root,ha.scrollable_area,ha.config);delete aa[ea.id];}da(ga);});},isLoaded:function(ca){var da=z[ca.id];return !da||da.status==v;},show:function(ca,da){k.loadModules(["TickerStoryList"],function(ea){return (ba._showImpl(ea,ca,da));});},_showImpl:function(ca,da,ea){ea=ea||r;for(var fa in ca.instances()){var ga=s(fa);if(!ga||ga.parentNode.id==da.id)continue;ba.hide(ga.parentNode);}ba._doPositionChange(da);l.show(da);var ha=z[da.id];if(ha&&ha.status==t){var ia=(p.getElementDimensions(da).y||0)>0,ja=da.id==='pagelet_rhc_ticker'&&!l.hasClass(da,'hidden_rhc_ticker');if(ia||ja){ba._fetchTickerForPlaceholder(da,ea);}else i.subscribe('Ticker/resized',function(){if(ha.status==t)ba._fetchTickerForPlaceholder(da,ea);});}else{var ka=m.scry(da,'.fbFeedTicker')[0];ba.callWithInstance(ka,function(la){y=la;la&&la._poll();z[da.id]={status:w,callback:ea};ea();});}i.inform('ticker/show',{node:da,callback:ea});},_doPositionChange:function(ca){if(l.shown(ca))return;new j('/common/ods_endpoint.php',{k:'ticker.render.switch.'+ca.id}).send();},hide:function(ca){var da=m.scry(ca,'.fbFeedTicker')[0];ba.callWithInstance(da,function(ea){ea&&ea.hideActiveStory();l.hide(ca);});},hideStoriesByClass:function(ca){k.loadModules(["TickerStoryList"],function(da){for(var ea in da.instances())m.scry(q(ea),ca).forEach(l.hide);});},hideStory:function(ca){ba.callWithInstance(ca,function(da){da&&da.hideStory(ca);});},replaceStory:function(ca,da){var ea=m.scry(document.body,'div.fbFeedTickerStory');ba.callWithInstance(ea[0],function(fa){var ga=fa._findStoryById(ca);fa.handleRemoveStory();l.hide(ga);m.insertAfter(ga,da);da.setAttribute('data-story-id',ga.getAttribute('id'));var ha=setTimeout(function(){return ba.removeMarkup(da,ga);},x);da.setAttribute('data-timeout-token',ha);});},removeMarkup:function(ca,da){l.addClass(ca,'removedStoryMarkup');new h(ca).to('height',0).duration(500).ondone(function(){m.remove(ca);}).go();},undoHideStory:function(ca){ba.callWithInstance(ca,function(da){da&&da.undoHideStory(ca);});},insertStoriesAtBottom:function(ca){y.insertStoriesAtBottom(ca);},_fetchTickerForPlaceholder:function(ca,da){var ea={handler:function(){z[ca.id].status=v;da();}};o.loadFromEndpoint('TickerEntStoryPagelet',ca.id,z[ca.id].pageletData,ea);z[ca.id].status=u;},registerStoryDialog:function(ca,da){i.subscribe('ticker/init',function(){var ea=s(ca);ba.callWithInstance(ea,function(fa){fa&&fa.registerStoryDialog(ea,da);});},i.SUBSCRIBE_ALL);},registerPlaceholder:function(ca,da){var ea=z[ca];z[ca]={status:t,pageletData:da};if(ea&&ea.status==w){ba.show(q(ca));ea.callback();}}};f.exports=ba;},null);
__d('TickerRightColumnController',['Arbiter','CSS','DOM','Event','NavigationMessage','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t;function u(){var z=r('pagelet_rhc_ticker');z&&p.show(z,w);}function v(){var z=r('pagelet_rhc_ticker');z&&p.hide(z);}function w(){var z=r('pagelet_rhc_ticker'),aa=j.scry(z,'.ticker_container')[0],ba=j.scry(z,'.ticker_stream')[0],ca=r('rightCol');if(!z||!aa||!ba||!ca)return;n.set(aa,'height','0');var da=75,ea=q.getViewportDimensions().y,fa=q.getElementDimensions(ca).y,ga=ea-fa-da,ha=q.getElementDimensions(ba).y,ia=Math.max(Math.min(ga,ha,t.tickerMaxHeight||425),t.tickerMinHeight||225);n.set(aa,'height',ia+'px');}function x(z){var aa=r('pagelet_reminders'),ba=r('pagelet_rhc_ticker'),ca=aa&&j.scry(aa,'div.tickerToggleWrapper')[0],da=ba&&j.scry(ba,'div.tickerToggleWrapper')[0];ca&&i.conditionClass(ca,'displayedTickerToggleWrapper',!z);da&&i.conditionClass(da,'displayedTickerToggleWrapper',z);ba&&i.conditionClass(ba,'hidden_rhc_ticker',!z);if(z){w();var ea=r('fbTickerClosedEd');ea&&i.hide(ea);}}var y={init:function(z){t=z;var aa=new o();if(t.enableSidebar)aa.addSubscriptions(h.subscribe('sidebar/hide',u),h.subscribe('sidebar/show',v),h.subscribe('minisidebar/show',u),h.subscribe('LitestandClassicRHC/loaded',w),k.listen(window,'scroll',s(function(){var ca=j.scry(r('pagelet_rhc_ticker'),'.fbFeedTicker')[0];p.callWithInstance(ca,function(da){return (da&&da.handleRemoveStory());});})));if(!i.hasClass(document.documentElement,'sidebarMode')){u();}else if(t.enableSidebar)v();var ba=function(){aa.release();};h.subscribeOnce(l.NAVIGATION_BEGIN,ba);m.onLeave(ba);},initRHCTickerHider:function(z){k.listen(z,'click',this.hideRHCTicker);},showRHCTicker:function(){x(true);},hideRHCTicker:function(){x(false);}};f.exports=y;},null);