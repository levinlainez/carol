/*!CK:2670693730!*//*1450099204,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["wU2aq"]); }

__d("PlatformVersions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LATEST:"v3.0",versions:{UNVERSIONED:"unversioned",V1_0:"v1.0",V2_0:"v2.0",V2_1:"v2.1",V2_2:"v2.2",V2_3:"v2.3",V2_4:"v2.4",V2_5:"v2.5",V3_0:"v3.0"}};},null);
__d("PluginConnectButtonType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BLUE_BASE:1,WHITE_BASE:2};},null);
__d("PluginShareLogTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={IMPRESSION:"impression",CLICK:"click"};},null);
__d('PlatformDialog',['DOMEventListener','DOMEvent','CSS','cx'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l;m.getInstance=function(){'use strict';return l;};function m(n,o,p){'use strict';l=this;this.$PlatformDialog1=n;this.$PlatformDialog2=o;this.$PlatformDialog3=false;h.add(this.$PlatformDialog1,'submit',(function(q){if(this.$PlatformDialog3){new i(q).kill();return;}this.$PlatformDialog3=true;if(p)j.addClass(n,"_32qa");}).bind(this));}m.prototype.getForm=function(){'use strict';return this.$PlatformDialog1;};m.prototype.getDisplay=function(){'use strict';return this.$PlatformDialog2;};m.prototype.hasBeenSubmitted=function(){'use strict';return this.$PlatformDialog3;};m.RESPONSE='platform/dialog/response';f.exports=m;},null);
__d('StrSet',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.$StrSet1={};this.$StrSet2=0;if(i)this.addAll(i);}h.prototype.add=function(i){'use strict';if(!this.$StrSet1.hasOwnProperty(i)){this.$StrSet1[i]=true;this.$StrSet2++;}return this;};h.prototype.addAll=function(i){'use strict';i.forEach(this.add,this);return this;};h.prototype.remove=function(i){'use strict';if(this.$StrSet1.hasOwnProperty(i)){delete this.$StrSet1[i];this.$StrSet2--;}return this;};h.prototype.removeAll=function(i){'use strict';i.forEach(this.remove,this);return this;};h.prototype.toArray=function(){'use strict';return Object.keys(this.$StrSet1);};h.prototype.toMap=function(i){'use strict';var j={};Object.keys(this.$StrSet1).forEach(function(k){j[k]=typeof i=='function'?i(k):i||true;});return j;};h.prototype.contains=function(i){'use strict';return this.$StrSet1.hasOwnProperty(i);};h.prototype.count=function(){'use strict';return this.$StrSet2;};h.prototype.clear=function(){'use strict';this.$StrSet1={};this.$StrSet2=0;return this;};h.prototype.clone=function(){'use strict';return new h(this);};h.prototype.forEach=function(i,j){'use strict';Object.keys(this.$StrSet1).forEach(i,j);};h.prototype.map=function(i,j){'use strict';return Object.keys(this.$StrSet1).map(i,j);};h.prototype.some=function(i,j){'use strict';return Object.keys(this.$StrSet1).some(i,j);};h.prototype.every=function(i,j){'use strict';return Object.keys(this.$StrSet1).every(i,j);};h.prototype.filter=function(i,j){'use strict';return new h(Object.keys(this.$StrSet1).filter(i,j));};h.prototype.union=function(i){'use strict';return this.clone().addAll(i);};h.prototype.intersect=function(i){'use strict';return this.filter(function(j){return i.contains(j);});};h.prototype.difference=function(i){'use strict';return i.filter((function(j){return !this.contains(j);}).bind(this));};h.prototype.equals=function(i){'use strict';var j=function(n,o){return n===o?0:n<o?-1:1;},k=this.toArray(),l=i.toArray();if(k.length!==l.length)return false;var m=k.length;k=k.sort(j);l=l.sort(j);while(m--)if(k[m]!==l[m])return false;return true;};f.exports=h;},null);
__d('transferTextStyles',['Style'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={fontFamily:null,fontSize:null,fontStyle:null,fontWeight:null,lineHeight:null,wordWrap:null};function j(k,l){for(var m in i)if(i.hasOwnProperty(m))i[m]=h.get(k,m);h.apply(l,i);}f.exports=j;},null);
__d('TextMetrics',['DOM','Style','UserAgent','transferTextStyles'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(n){var o=n.clientWidth,p=i.get(n,'-moz-box-sizing')=='border-box';if(p&&j.isBrowser('Firefox < 29'))return o;var q=i.getFloat(n,'paddingLeft')+i.getFloat(n,'paddingRight');return o-q;}function m(n,o){'use strict';this.$TextMetrics1=n;this.$TextMetrics2=!!o;var p='textarea',q='textMetrics';if(this.$TextMetrics2){p='div';q+=' textMetricsInline';}this.$TextMetrics3=h.create(p,{className:q});k(n,this.$TextMetrics3);document.body.appendChild(this.$TextMetrics3);}m.prototype.measure=function(n){'use strict';var o=this.$TextMetrics1,p=this.$TextMetrics3;n=(n||o.value)+'...';if(!this.$TextMetrics2){var q=l(o);i.set(p,'width',Math.max(q,0)+'px');}if(o.nodeName==='TEXTAREA'){p.value=n;}else h.setContent(p,n);return {width:p.scrollWidth,height:p.scrollHeight};};m.prototype.destroy=function(){'use strict';h.remove(this.$TextMetrics3);};f.exports=m;},null);
__d('PlatformBaseVersioning',['PlatformVersions','getObjectValues','StrSet','invariant'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=new j(i(h.versions)),m=location.pathname,n=m.substring(1,m.indexOf('/',1)),o=l.contains(n)?n:h.versions.UNVERSIONED;function p(s,t){if(t==h.versions.UNVERSIONED)return s;!l.contains(t)?k(0):undefined;if(s.indexOf('/')!==0)s='/'+s;return '/'+t+s;}function q(s){if(l.contains(s.substring(1,s.indexOf('/',1))))return s.substring(s.indexOf('/',1));return s;}var r={addVersionToPath:p,getLatestVersion:function(){return h.LATEST;},versionAwareURI:function(s){return s.setPath(p(s.getPath(),o));},versionAwarePath:function(s){return p(s,o);},getUnversionedPath:q};f.exports=r;},null);
__d('PlatformWidgetEndpoint',['PlatformBaseVersioning'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(n,o){return h.versionAwarePath('/dialog'+'/'+n+(o?'/'+o:''));}function j(n,o){return h.versionAwarePath('/plugins'+'/'+n+(o?'/'+o:''));}function k(n){return (/^\/plugins\//.test(h.getUnversionedPath(n)));}function l(n){return (/^\/dialog\//.test(h.getUnversionedPath(n)));}var m={dialog:i,plugins:j,isPluginEndpoint:k,isDialogEndpoint:l};f.exports=m;},null);
__d('ArbiterFrame',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={inform:function(i,j,k){var l=parent.frames,m=l.length,n;j.crossFrame=true;for(var o=0;o<m;o++){n=l[o];try{if(!n||n==window)continue;if(n.require){n.require('Arbiter').inform(i,j,k);}else if(n.ServerJSAsyncLoader)n.ServerJSAsyncLoader.wakeUp(i,j,k);}catch(p){}}}};f.exports=h;},null);
__d('Popup',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={open:function(i,j,k){var l=document.body,m='screenX' in window?window.screenX:window.screenLeft,n='screenY' in window?window.screenY:window.screenTop,o='outerWidth' in window?window.outerWidth:l.clientWidth,p='outerHeight' in window?window.outerHeight:l.clientHeight-22,q=Math.floor(m+(o-j)/2),r=Math.floor(n+(p-k)/2.5),s=['width='+j,'height='+k,'left='+q,'top='+r,'scrollbars'];return window.open(i,'_blank',s.join(','));}};f.exports=h;},null);
__d('PopupLink',['DOMEvent','DOMEventListener','Popup'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={listen:function(l,m,n){i.add(l,'click',function(o){new h(o).kill();j.open(l.href,m,n);});}};f.exports=k;},null);
__d('PopupWindow',['DOMDimensions','DOMQuery','Layer','Popup','getViewportDimensions'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={_opts:{allowShrink:true,strategy:'vector',timeout:100,widthElement:null},init:function(n){Object.assign(m._opts,n);setInterval(m._resizeCheck,m._opts.timeout);},_resizeCheck:function(){var n=l(),o=m._getDocumentSize(),p=j.getTopmostLayer();if(p){var q=p.getRoot().firstChild,r=h.getElementDimensions(q);r.height+=h.measureElementBox(q,'height',true,true,true);r.width+=h.measureElementBox(q,'width',true,true,true);o.height=Math.max(o.height,r.height);o.width=Math.max(o.width,r.width);}var s=o.height-n.height,t=o.width-n.width;if(t<0&&!m._opts.widthElement)t=0;t=t>1?t:0;if(!m._opts.allowShrink&&s<0)s=0;if(s||t)try{window.console&&window.console.firebug;window.resizeBy(t,s);if(t)window.moveBy(t/-2,0);}catch(u){}},_getDocumentSize:function(){var n=h.getDocumentDimensions();if(m._opts.strategy==='offsetHeight')n.height=document.body.offsetHeight;if(m._opts.widthElement){var o=i.scry(document.body,m._opts.widthElement)[0];if(o)n.width=h.getElementDimensions(o).width;}var p=b.Dialog;if(p&&p.max_bottom&&p.max_bottom>n.height)n.height=p.max_bottom;return n;},open:function(n,o,p){return k.open(n,p,o);}};f.exports=m;},null);
__d('Queue',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(j){'use strict';this._opts=babelHelpers._extends({interval:0,processor:null},j);this._queue=[];this._stopped=true;}i.prototype._dispatch=function(j){'use strict';if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error('No processor available');}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(this._dispatch.bind(this),this._opts.interval);}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift());};i.prototype.enqueue=function(j){'use strict';if(this._opts.processor&&!this._stopped){this._opts.processor.call(this,j);}else this._queue.push(j);return this;};i.prototype.start=function(j){'use strict';if(j)this._opts.processor=j;this._stopped=false;this._dispatch();return this;};i.prototype.isStarted=function(){'use strict';return !this._stopped;};i.prototype.dispatch=function(){'use strict';this._dispatch(true);};i.prototype.stop=function(j){'use strict';this._stopped=true;if(j)clearTimeout(this._timeout);return this;};i.prototype.merge=function(j,k){'use strict';this._queue[k?'unshift':'push'].apply(this._queue,j._queue);j._queue=[];this._dispatch();return this;};i.prototype.getLength=function(){'use strict';return this._queue.length;};i.get=function(j,k){'use strict';var l;if(j in h){l=h[j];}else l=h[j]=new i(k);return l;};i.exists=function(j){'use strict';return j in h;};i.remove=function(j){'use strict';return delete h[j];};f.exports=i;},null);
__d('TextInputControl',['DOMControl','Event','Input','debounce'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,h);m=l&&l.prototype;function n(o){'use strict';m.constructor.call(this,o);var p=this.getRoot(),q=k(this.update.bind(this),0);i.listen(p,{input:q,keydown:q,paste:q});}n.prototype.setMaxLength=function(o){'use strict';j.setMaxLength(this.getRoot(),o);return this;};n.prototype.getValue=function(){'use strict';return j.getValue(this.getRoot());};n.prototype.isEmpty=function(){'use strict';return j.isEmpty(this.getRoot());};n.prototype.setValue=function(o){'use strict';j.setValue(this.getRoot(),o);this.update();return this;};n.prototype.clear=function(){'use strict';return this.setValue('');};n.prototype.setPlaceholderText=function(o){'use strict';j.setPlaceholder(this.getRoot(),o);return this;};f.exports=n;},null);
__d('TextAreaControl',['Arbiter','ArbiterMixin','CSS','DOMControl','Event','Style','TextInputControl','TextMetrics','classWithMixins','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r,s;function t(v,w){return m.getFloat(v,w)||0;}r=babelHelpers.inherits(u,p(n,q(i)));s=r&&r.prototype;function u(v){'use strict';s.constructor.call(this,v);this.autogrow=j.hasClass(v,'uiTextareaAutogrow');this.autogrowWithPlaceholder=j.hasClass(v,'uiTextareaAutogrowWithPlaceholder');this.width=null;l.listen(v,'focus',this._handleFocus.bind(this));}u.prototype.setAutogrow=function(v){'use strict';this.autogrow=v;return this;};u.prototype.onupdate=function(){'use strict';s.onupdate.call(this);this.updateHeight();};u.prototype.updateHeight=function(){'use strict';if(this.autogrow){var v=this.getRoot();if(!this.metrics)this.metrics=new o(v);if(typeof this.initialHeight==='undefined'){this.isBorderBox=m.get(v,'box-sizing')==='border-box'||m.get(v,'-moz-box-sizing')==='border-box'||m.get(v,'-webkit-box-sizing')==='border-box';this.borderBoxOffset=t(v,'padding-top')+t(v,'padding-bottom')+t(v,'border-top-width')+t(v,'border-bottom-width');this.initialHeight=v.offsetHeight-this.borderBoxOffset;}var w=null;if((!v.value||v.value.length===0)&&this.autogrowWithPlaceholder){w=this.metrics.measure(v.placeholder);}else w=this.metrics.measure();var x=Math.max(this.initialHeight,w.height);if(this.isBorderBox)x+=this.borderBoxOffset;if(this.maxHeight&&x>this.maxHeight){x=this.maxHeight;h.inform('maxHeightExceeded',{textArea:v});}if(x!==this.height){this.height=x;m.set(v,'height',x+'px');h.inform('reflow');this.inform('resize');}}else if(this.metrics){this.metrics.destroy();this.metrics=null;}};u.prototype.resetHeight=function(){'use strict';this.height=-1;this.update();};u.prototype.setMaxHeight=function(v){'use strict';this.maxHeight=v;};u.prototype.setAutogrowWithPlaceholder=function(v){'use strict';this.autogrowWithPlacedholder=v;};u.prototype._handleFocus=function(){'use strict';this.width=null;};u.getInstance=function(v){'use strict';return k.getInstance(v)||new u(v);};f.exports=u;},null);
__d('resolveWindow',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){var j=window,k=i.split('.');try{for(var m=0;m<k.length;m++){var n=k[m],o=/^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(n);if(o){j=j.frames[o[1]];}else if(n==='opener'||n==='parent'||n==='top'){j=j[n];}else return null;}}catch(l){return null;}return j;}f.exports=h;},null);
__d('XD',['Arbiter','DOM','DOMDimensions','Log','PHPQuerySerializer','URI','Queue','isFacebookURI','isInIframe','resolveWindow'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r='fb_xdm_frame_'+location.protocol.replace(':',''),s={_callbacks:[],_opts:{autoResize:false,allowShrink:true,channelUrl:null,hideOverflow:false,resizeTimeout:1000,resizeWidth:false,expectResizeAck:false,resizeAckTimeout:6000},_lastResizeAckId:0,_resizeCount:0,_resizeTimestamp:0,_shrinker:null,init:function(u){this._opts=babelHelpers._extends({},this._opts,u);if(this._opts.autoResize)this._startResizeMonitor();h.subscribe('Connect.Unsafe.resize.ack',(function(v,w){if(!w.id)w.id=this._resizeCount;if(w.id>this._lastResizeAckId)this._lastResizeAckId=w.id;}).bind(this));},getQueue:function(){if(!this._queue)this._queue=new n();return this._queue;},setChannelUrl:function(u){this.getQueue().start((function(v){return this.send(v,u);}).bind(this));},send:function(u,v){v=v||this._opts.channelUrl;if(!v){this.getQueue().enqueue(u);return;}var w={},x=new m(v);Object.assign(w,u,l.deserialize(x.getFragment()));var y=new m(w.origin).getOrigin(),z=q(w.relation.replace(/^parent\./,'')),aa=50,ba=function(){var ca=z.frames[r];try{ca.proxyMessage(l.serialize(w),y);}catch(da){if(--aa){setTimeout(ba,100);}else k.warn('No such frame "'+r+'" to proxyMessage to');}};ba();},_computeSize:function(){var u=j.getDocumentDimensions(),v=0;if(this._opts.resizeWidth){var w=document.body;if(w.clientWidth<w.scrollWidth){v=u.width;}else{var x=w.childNodes;for(var y=0;y<x.length;y++){var z=x[y],aa=z.offsetLeft+z.offsetWidth;if(aa>v)v=aa;}}v=Math.max(v,s.forced_min_width);}u.width=v;if(this._opts.allowShrink){if(!this._shrinker)this._shrinker=i.create('div');i.appendContent(document.body,this._shrinker);u.height=Math.max(this._shrinker.offsetTop,0);}return u;},_startResizeMonitor:function(){var u,v=document.documentElement;if(this._opts.hideOverflow){v.style.overflow='hidden';document.body.style.overflow='hidden';}var w=(function(){var x=this._computeSize(),y=Date.now(),z=this._lastResizeAckId<this._resizeCount&&y-this._resizeTimestamp>this._opts.resizeAckTimeout;if(!u||this._opts.expectResizeAck&&z||this._opts.allowShrink&&u.width!=x.width||!this._opts.allowShrink&&u.width<x.width||this._opts.allowShrink&&u.height!=x.height||!this._opts.allowShrink&&u.height<x.height){u=x;this._resizeCount++;this._resizeTimestamp=y;var aa={type:'resize',height:x.height,ackData:{id:this._resizeCount}};if(x.width&&x.width!=0)aa.width=x.width;try{if(o(new m(document.referrer))&&p()&&window.name&&window.parent.location&&window.parent.location.toString&&o(new m(window.parent.location))){var ca=window.parent.document.getElementsByTagName('iframe');for(var da=0;da<ca.length;da=da+1)if(ca[da].name==window.name){if(this._opts.resizeWidth)ca[da].style.width=aa.width+'px';ca[da].style.height=aa.height+'px';}}this.send(aa);}catch(ba){this.send(aa);}}}).bind(this);w();setInterval(w,this._opts.resizeTimeout);}},t=babelHelpers._extends({},s);f.exports.UnverifiedXD=t;f.exports.XD=s;b.UnverifiedXD=t;b.XD=s;},null);
__d('Plugin',['Arbiter','ArbiterFrame'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={CONNECT:'platform/plugins/connect',DISCONNECT:'platform/plugins/disconnect',ERROR:'platform/plugins/error',RELOAD:'platform/plugins/reload',DIALOG:'platform/plugins/dialog',connect:function(k,l){var m={identifier:k,href:k,story_fbid:l};h.inform(j.CONNECT,m);i.inform(j.CONNECT,m);},disconnect:function(k,l){var m={identifier:k,href:k,story_fbid:l};h.inform(j.DISCONNECT,m);i.inform(j.DISCONNECT,m);},error:function(k,l){h.inform(j.ERROR,{action:k,content:l});},reload:function(k){h.inform(j.RELOAD,{reloadUrl:k||''});i.inform(j.RELOAD,{reloadUrl:k||''});},reloadOtherPlugins:function(){i.inform(j.RELOAD,{reloadUrl:''});}};f.exports=j;},null);
__d('PluginFlyout',['Arbiter','Button','CSS','DOM','DOMEvent','DOMEventListener','Focus','FormSubmit','Plugin','TextAreaControl','csx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=h.SUBSCRIBE_NEW,t=h.subscribe,u=h.inform,v=function(x,y){return m.add(x,'click',y);};function w(x,y,z){var aa=this,ba=t(p.CONNECT,function(event,ca){h.unsubscribe(ba);aa.init(x,y,z);aa.connect(event,ca);},s);t(p.DIALOG,function(){aa.init(x,y,z);aa.toggle();},s);}Object.assign(w.prototype,{init:function(x,y,z){if(this.initialized)return;this.initialized=true;k.appendContent(x,JSON.parse(z));var aa=k.find(x,'form'),ba=k.find(aa,"._56zw"),ca=k.find(aa,"._56zx"),da=k.find(aa,"._42x4"),ea=q.getInstance(da);m.add(da,'keyup',function(ia){i.setEnabled(ba,!!ea.getValue());});m.add(window,'keydown',function(ia){if(ia.keyCode===27)ga();});m.add(aa,'submit',function(ia){new l(ia).kill();o.send(aa);});var fa=y==='tiny'?k.find(document.body,'.pluginPostFlyoutPrompt'):null;this.flyout=x;this.form=aa;this.post_button=ba;this.prompt=fa;var ga=this.hide.bind(this),ha=this.show.bind(this);v(ca,function(ia){new l(ia).kill();ga();});if(fa)v(fa,function(ia){new l(ia).kill();ha();});t(p.CONNECT,this.connect.bind(this),s);t(p.DISCONNECT,function(){ga();},s);t(w.SUCCESS,function(){ga();if(fa)j.hide(fa);},s);t(p.ERROR,function(event,ia){if(ia.action!=='comment')return;k.setContent(k.find(aa,"._56zy"),ia.content);j.hide(ba);},s);},connect:function(event,x){if(x.crossFrame)return;if(this.prompt)j.show(this.prompt);if(!x.story_fbid)this.show();},show:function(){this.shown=true;j.show(this.flyout);j.show(this.post_button);var x=k.scry(this.form,"._5jjo");if(x){n.set(x[0]);}else n.set(this.form.comment);u(w.SHOW);},hide:function(){this.shown=false;j.hide(this.flyout);u(w.HIDE);},toggle:function(){if(this.shown){this.hide();}else this.show();}});Object.assign(w,{SUCCESS:'platform/plugins/flyout/success',SHOW:'platform/plugins/flyout/show',HIDE:'platform/plugins/flyout/hide',success:function(){u(w.SUCCESS);}});f.exports=w;},null);
__d('PluginMessage',['DOMEventListener'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={listen:function(){h.add(window,'message',function(event){if(/\.facebook\.com$/.test(event.origin)&&/^FB_POPUP:/.test(event.data)){var j=JSON.parse(event.data.substring(9));if('reload' in j&&/^https?:/.test(j.reload))document.location.replace(j.reload);}});}};f.exports=i;},null);
__d('PluginOptin',['DOMEvent','DOMEventListener','PluginMessage','PopupWindow','URI','UserAgent_DEPRECATED','PlatformWidgetEndpoint'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();function o(p,q){Object.assign(this,{return_params:l.getRequestURI().getQueryData(),login_params:{},optin_params:{},plugin:p,api_key:q});this.addReturnParams({ret:'optin'});this.login_params.nux=false;delete this.return_params.hash;}Object.assign(o.prototype,{addReturnParams:function(p){Object.assign(this.return_params,p);return this;},addLoginParams:function(p){Object.assign(this.login_params,p);return this;},addOptinParams:function(p){Object.assign(this.optin_params,p);return this;},start:function(){var p=new l(n.dialog('plugin.optin')).addQueryData(this.optin_params).addQueryData({app_id:this.api_key||127760087237610,secure:l.getRequestURI().isSecure(),social_plugin:this.plugin,return_params:JSON.stringify(this.return_params),login_params:JSON.stringify(this.login_params)});if(m.mobile()){p.setSubdomain('m');}else p.addQueryData({display:'popup'});this.popup=k.open(p.toString(),420,450);j.listen();return this;}});o.starter=function(p,q,r,s){var t=new o(p);t.addReturnParams(q||{});t.addLoginParams(r||{});t.addOptinParams(s||{});return t.start.bind(t);};o.listen=function(p,q,r,s,t){i.add(p,'click',function(u){new h(u).kill();o.starter(q,r,s,t)();});};f.exports=o;},null);
__d('PluginConnectButton',['Arbiter','CSS','DOM','DOMDimensions','DOMEvent','DOMEventListener','Focus','FormSubmit','PlatformWidgetEndpoint','Plugin','PluginConnectButtonType','PluginFlyout','PluginOptin','Style','URI','csx','cx','getElementPosition'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){if(c.__markCompiled)c.__markCompiled();var z=h.SUBSCRIBE_NEW,aa=h.subscribe,ba=function(da,ea){return m.add(da,'click',ea);};function ca(da){this.config=da;this.busy=false;var ea=j.find(da.form,'.pluginConnectButton');this.buttons=ea;this.node_connected=j.find(ea,'.pluginConnectButtonConnected');this.node_disconnected=j.find(ea,'.pluginConnectButtonDisconnected');var fa=(function(ha){new l(ha).kill();if(!this.busy){this.submit();this.busy=this.canpersonalize;}}).bind(this);ba(this.node_disconnected,fa);if(da.buttontype===r.BLUE_BASE){ba(j.find(ea,'.pluginButtonX button'),fa);}else if(da.buttontype===r.WHITE_BASE)ba(this.node_connected,fa);ba(this.node_connected,function(ha){return h.inform(q.DIALOG,ha);});var ga=this.update.bind(this);aa(q.CONNECT,ga,z);aa(q.DISCONNECT,ga,z);aa(q.ERROR,this.error.bind(this),z);aa('Connect.Unsafe.xd/reposition',this.flip.bind(this));aa(s.HIDE,this.hideFlyout.bind(this));if(da.autosubmit)setTimeout(this.submit.bind(this),0);}Object.assign(ca.prototype,{update:function(da,event){this.busy=false;var ea=this.config;if(event.identifier!==ea.identifier)return;var fa=da===q.CONNECT,ga=p.plugins(ea.plugin);ga+='/'+(!fa?'connect':'disconnect');i[fa?'show':'hide'](this.node_connected);i[fa?'hide':'show'](this.node_disconnected);try{if(document.activeElement.nodeName.toLowerCase()==='button'){var ia=fa?this.node_connected:this.node_disconnected,ja=j.find(ia,'button');ja.disabled=false;n.set(ja);}}catch(ha){}ea.connected=fa;ea.form.setAttribute('action',ga);ea.form.setAttribute('ajaxify',ga);},error:function(event,da){this.busy=false;if(da.action in {connect:1,disconnect:1}){j.setContent(this.buttons,da.content);var ea=j.scry(this.buttons,'.confirmButton');if(ea.length===1)n.set(ea[0]);}},submit:function(){if(!this.config.canpersonalize)return this.login();o.send(this.config.form);this.fireStateToggle();},fireStateToggle:function(){var da=this.config;if(da.connected){q.disconnect(da.identifier);}else q.connect(da.identifier);},login:function(){var da=this.config.plugin;new t(da,v.getRequestURI().getQueryData().api_key).addReturnParams({act:'connect'}).addLoginParams({social_plugin_action:this.config.pluginaction}).start();},flip:function(da,ea){var fa=j.scry(document.body,"._4xn8");if(fa.length===0){return;}else fa=fa[0];var ga=j.scry(this.config.form,'.pluginConnectButtonConnected .pluginButtonIcon'),ha=u.get(ga[0],'display')!=='none'?ga[0]:ga[1],ia=j.find(document.body,'.pluginConnectButtonLayoutRoot'),ja;if(ea.type==='reposition'){i.addClass(ia,"_1f8a");u.set(ia,'padding-left',450-ia.offsetWidth+'px');i.removeClass(ia,"_1f8b");ja=y(ha).x+k.getElementDimensions(ha).width/2-6;}else{i.addClass(ia,"_1f8b");u.set(ia,'padding-left','0px');i.removeClass(ia,"_1f8a");ja=6;}u.set(fa,'left',ja+'px');},hideFlyout:function(){n.set(this.connected?this.node_disconnected:this.node_connected);}});f.exports=ca;},null);
__d('UnverifiedXD',['XD'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('XD').UnverifiedXD;f.exports=h;},null);
__d('PluginResize',['Locale','Log','UnverifiedXD','getOffsetParent','getStyleProperty'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(q){q=q||document.body;var r=0,s=k(q);if(h.isRTL()&&s){r=s.offsetWidth-q.offsetLeft-q.offsetWidth;}else if(!h.isRTL())r=q.offsetLeft;return n(q)+r;}function n(q){return Math.ceil(parseFloat(l(q,'width')))||q.offsetWidth;}function o(q){q=q||document.body;return q.offsetHeight+q.offsetTop;}function p(q,r,event,s){this.calcWidth=q||m;this.calcHeight=r||o;this.width=undefined;this.height=undefined;this.reposition=!!s;this.event=event||'resize';}Object.assign(p.prototype,{resize:function(){var q=this.calcWidth(),r=this.calcHeight();if(q!==this.width||r!==this.height){i.debug('Resizing Plugin: (%s, %s, %s, %s)',q,r,this.event,this.reposition);this.width=q;this.height=r;j.send({type:this.event,width:q,height:r,reposition:this.reposition});}return this;},auto:function(q){setInterval(this.resize.bind(this),q||250);return this;}});p.auto=function(q,event,r){return new p(m.bind(null,q),o.bind(null,q),event).resize().auto(r);};p.autoHeight=function(q,r,event,s){return new p(function(){return q;},o.bind(null,r),event).resize().auto(s);};p.getElementWidth=n;f.exports=p;},null);
__d('PluginConnectButtonResize',['DOMDimensions','DOMQuery','PluginResize','Style','getElementPosition'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(n,o,p){if(p)k.set(n,'width',p+'px');j.auto(n,'resize.flow');function q(){var r=i.scry(document.body,'.uiTypeaheadView')[0];if(!r)return {x:0,y:0};var s=l(r),t=h.getElementDimensions(r);return {x:s.x+t.width,y:s.y+t.height};}new j(function(){return (Math.max(j.getElementWidth(n),o&&o.offsetWidth,q().x));},function(){return (Math.max(n.offsetHeight,o?o.offsetHeight+o.offsetTop:0,q().y));},'resize.iframe',true).resize().auto();}f.exports=m;},null);
__d('PluginConnection',['Arbiter','CSS','Plugin'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=function(){};Object.assign(k.prototype,{init:function(l,m,n,event){event=event||j.CONNECT;this.identifier=l;this.element=m;this.css=n;h.subscribe([j.CONNECT,j.DISCONNECT],function(o,p){if(l===p.href)i[o===event?'addClass':'removeClass'](m,n);return true;});return this;},connected:function(){return i.hasClass(this.element,this.css);},connect:function(){return h.inform(j.CONNECT,{href:this.identifier},h.BEHAVIOR_STATE);},disconnect:function(){return h.inform(j.DISCONNECT,{href:this.identifier},h.BEHAVIOR_STATE);},toggle:function(){return this.connected()?this.disconnect():this.connect();}});k.init=function(l){for(var m,n=0;n<l.length;n++){m=new k();m.init.apply(m,l[n]);}};f.exports=k;},null);
__d('PluginReturn',['Arbiter','Log','PlatformDialog','Plugin','URI','invariant','PlatformWidgetEndpoint'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();h.subscribe(j.RESPONSE,function(event,p){if(p.error_code){i.debug('Plugin Return Error (%s): %s',p.error_code,p.error_message||p.error_description);return;}k.reload(p.plugin_reload);});var o={auto:function(){h.subscribe(k.RELOAD,function(event,p){var q=typeof p=='object'?p.reloadUrl:p;o.reload(q);});},syncPlugins:function(){h.subscribe(k.RELOAD,function(event,p){if(p.crossFrame)o.reload(p.reloadUrl);});},reload:function(p){var q=l.getRequestURI().removeQueryData('ret').removeQueryData('act').removeQueryData('hash');if(p){var r=new l(p);!n.isPluginEndpoint(r.getPath())?m(0):undefined;q.setPath(r.getPath()).addQueryData(r.getQueryData());}window.location.replace(q.toString());}};f.exports=o;},null);
__d("XSharePluginLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/plugin\/share\/logging\/",{});},null);
__d('PluginShareActions',['AsyncRequest','Event','UnverifiedXD','PluginShareLogTypes','XSharePluginLoggingController'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m={init:function(n,o,p,q,r,s){i.listen(r,'click',function(t){new h().setURI(l.getURIBuilder().getURI()).setData({app_id:s,href:n,layout:o,event:k.CLICK,has_iframe:p,referer_url:q}).send();});},triggerIframe:function(n,o){i.listen(o,'click',function(p){j.send({type:'shareTriggerIframe',data:JSON.stringify({href:n})});});}};f.exports=m;},null);
__d('PluginShareButton',['Arbiter','DOM','DOMEventListener','UnverifiedXD'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l={init:function(m){j.add(m,'click',function(){k.send({type:'getTextSelection'});});h.subscribe('Connect.Unsafe.setTextSelection',function(n,o){i.insertAfter(m,i.create('input',{type:'hidden',id:'quotationtext',value:o.text}));});}};f.exports=l;},null);
__d('PluginXDReady',['Arbiter','UnverifiedXD'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={handleMessage:function(k){if(!k.method)return;try{h.inform('Connect.Unsafe.'+k.method,JSON.parse(k.params),h.BEHAVIOR_PERSISTENT);}catch(l){}}};b.XdArbiter=j;i.send({xd_action:'plugin_ready',name:window.name});f.exports=null;},null);