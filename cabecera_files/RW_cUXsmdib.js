/*!CK:3770185055!*//*1449580441,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["uJ1xh"]); }

__d('PhotoViewerInitPagelet',['ge','DOM','PhotoSnowlift','PhotoTags','PhotoTagger','PhotoTagApproval'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o){'use strict';j.attachTagger(o.tagging,o.tokenizer);var p=j.getInstance(),q=p.getRoot();new k([h('fbPhotoSnowliftAuthorName'),i.find(q,'span.fbPhotoTagList'),i.find(q,'div.fbPhotoPagesTagList')],h('fbPhotoSnowliftTagBoxes'),o.version);if(o.setupPhotoTagger){var r=new l(p);r.initSnowlift(o.tagging,o.tokenizer,o.userId);r.setQueueName(o.queueName);}new m(p);}f.exports=n;},null);
__d('legacy:TimelineMLE',['TimelineMLE'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.TimelineMLE=c('TimelineMLE');},3);