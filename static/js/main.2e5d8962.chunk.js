(this.webpackJsonpambwebsite=this.webpackJsonpambwebsite||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/shop.83664c2a.jpg"},,function(e,t,a){e.exports=a.p+"static/media/adhesion.12f910bc.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/LogoAMB.6f542d24.png"},,function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/Afterwork.bf82c304.jpg"},function(e,t,a){e.exports=a.p+"static/media/event-notype.61f9cf13.jpg"},function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/tuileMemories.d5418a17.jpg"},function(e,t,a){e.exports=a.p+"static/media/Sweat2021.d5d18008.png"},function(e,t,a){e.exports=a.p+"static/media/memories.f9095dca.jpg"},function(e,t,a){e.exports=a.p+"static/media/WEI20192020_1.c6dbc533.jpg"},function(e,t,a){e.exports=a.p+"static/media/Pull_Black.4ec486be.png"},function(e,t,a){e.exports=a.p+"static/media/Pull_Blue.93b9aced.png"},function(e,t,a){e.exports=a(62)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/wei-2020-460x460.7e6b81dd.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/parrainage.ebcd8dd4.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/moisAfterwork.aa9f56a0.jpg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(13),l=a.n(i),r=a(1),s=a(6),u=(a(39),a(2)),c=a(3),m=a(5),d=a(4);a(21),a(40),a(22);function p(e){return"interne"===e.typeBouton?o.a.createElement(v,{color:e.color,label:e.label,link:e.link}):"desactive"===e.typeBouton?o.a.createElement(b,{label:e.label}):"info"===e.typeBouton?o.a.createElement(E,{label:e.label}):"externe"===e.typeBouton?o.a.createElement(g,{label:e.label,link:e.link}):null}function v(e){return"white"===e.color?o.a.createElement(r.b,{to:e.link,style:{textDecoration:"none"}},o.a.createElement("div",{class:"module-button button-white"},e.label)):"bleuAMB"===e.color?o.a.createElement(r.b,{to:e.link,style:{textDecoration:"none"}},o.a.createElement("div",{class:"module-button button-bleuAMB"},e.label)):void 0}function b(e){return o.a.createElement("div",{class:"module-button button-grey"},e.label)}function E(e){return o.a.createElement("div",{class:"module-button button-orange"},e.label)}function g(e){return o.a.createElement("a",{class:"module-button button-bleuAMB",target:"_blank",rel:"noopener noreferrer nofollow",href:e.url},e.label)}function f(e){var t=e.status,a="0%";if("false"===e.last&&(a="2%"),"online"===t)return o.a.createElement("div",{style:{backgroundImage:"url("+e.imgurl+")"},class:"module-tuileMixLarge"},o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos"},o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-margin"},o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-titre"},e.title),o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-description"},e.description),o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-date"},e.date),o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-buttons"},o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-button1"},o.a.createElement(p,{typeBouton:e.typeBouton,color:e.buttonColor,link:e.buttonLink,label:e.buttonLabel}))))));if("new"===t);else{if("soon"===t)return o.a.createElement("div",{style:{backgroundImage:"url("+e.imgurl+")",marginBottom:a},class:"module-tuileMixLarge"},o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos"},o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-titre"},e.title),o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-description"},e.description),o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-date"},e.date),o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-buttons"},o.a.createElement("div",{class:"module-tuileMixLarge-bloc-infos-button1-soon"},"Infos \xe0 venir"))));if("offline"!==t)return null}}function h(e){var t=e.typeMix;return"large"===t?o.a.createElement(f,{status:e.status,imgurl:e.imgurl,linkGlobal:e.linkGlobal,title:e.title,description:e.description,date:e.date,typeBouton:e.typeBouton,numberButtons:e.numberButtons,buttonColor:e.buttonColor,buttonLabel:e.buttonLabel,buttonLink:e.buttonLink,last:e.last}):"small"===t?null:void 0}a(46);function x(e){var t=e.typeEvent;return"false"===e.isLast&&"","afterwork"===t?o.a.createElement("div",{class:"module-tuileEvent module-tuileEvent-margin"},"over"===e.status?o.a.createElement("div",{class:"module-tuileEvent-illustration module-tuileEvent-illustration-over"},o.a.createElement("img",{src:a(24),alt:e.title})):o.a.createElement("div",{class:"module-tuileEvent-illustration"},o.a.createElement("img",{src:a(24),alt:e.title})),o.a.createElement("div",{class:"module-tuileEvent-infos"},o.a.createElement("div",{class:"module-tuileEvent-info-titre"},e.title),o.a.createElement("div",{class:"module-tuileEvent-info-lieu"},e.lieu),o.a.createElement("div",{class:"module-tuileEvent-info-date"},e.date),o.a.createElement("div",{class:"module-tuileEvent-info-description"},e.description),o.a.createElement("div",{class:"module-tuileEvent-info-buttons"},"over"===e.status?o.a.createElement("div",null):o.a.createElement("div",{class:"module-tuileEvent-info-buttons-button1"},o.a.createElement(p,{typeBouton:e.typeBouton,color:e.button1Color,label:e.button1Label,link:e.button1Link}))))):"unspecified"===t?o.a.createElement("div",{class:"module-tuileEvent"},"over"===e.status?o.a.createElement("div",{class:"module-tuileEvent-illustration module-tuileEvent-illustration-over"},o.a.createElement("img",{src:a(25),alt:e.title})):o.a.createElement("div",{class:"module-tuileEvent-illustration"},o.a.createElement("img",{src:a(25),alt:e.title})),o.a.createElement("div",{class:"module-tuileEvent-infos"},o.a.createElement("div",{class:"module-tuileEvent-info-titre"},e.title),o.a.createElement("div",{class:"module-tuileEvent-info-lieu"},e.lieu),o.a.createElement("div",{class:"module-tuileEvent-info-date"},e.date),o.a.createElement("div",{class:"module-tuileEvent-info-description"},e.description),o.a.createElement("div",{class:"module-tuileEvent-info-buttons"},"over"===e.status?o.a.createElement("div",null):o.a.createElement("div",{class:"module-tuileEvent-info-buttons-button1"},o.a.createElement(p,{typeBouton:e.typeBouton,color:e.button1Color,label:e.button1Label,link:e.button1Link}))))):"wei"===t?o.a.createElement("div",{class:"module-tuileEvent"},o.a.createElement("div",{class:"module-tuileEvent-illustration"},o.a.createElement("img",{src:a(47),alt:e.title})),o.a.createElement("div",{class:"module-tuileEvent-infos"},o.a.createElement("div",{class:"module-tuileEvent-info-titre"},e.title),o.a.createElement("div",{class:"module-tuileEvent-info-lieu"},e.lieu),o.a.createElement("div",{class:"module-tuileEvent-info-date"},e.date),o.a.createElement("div",{class:"module-tuileEvent-info-description"},e.description),o.a.createElement("div",{class:"module-tuileEvent-info-buttons"},o.a.createElement("div",{class:"module-tuileEvent-info-buttons-button1"},o.a.createElement(p,{color:e.button1Color,label:e.button1Label,link:e.button1Link})),o.a.createElement("div",{class:"module-tuileEvent-info-buttons-button2 module-tuileEvent-info-buttons-margin"},o.a.createElement(p,{color:e.button2Color,label:e.button2Label,link:e.button2Link}))))):null}a(48);function y(e){return"alerte"===e.typeInfo?o.a.createElement("div",{class:"module-tuileInfo module-tuileInfo-alerte"},o.a.createElement("div",{class:"module-tuileInfo-contenu"},o.a.createElement("div",{class:"module-tuileInfo-texte"},e.texte),"true"===e.siBouton?o.a.createElement("div",{class:"module-tuileInfo-button"},o.a.createElement(p,{typeBouton:e.typeBouton,color:e.buttonColor,link:e.buttonLink,label:e.buttonLabel})):o.a.createElement("div",null))):"info"===e.typeInfo?o.a.createElement("div",{class:"module-tuileInfo module-tuileInfo-info"},o.a.createElement("div",{class:"module-tuileInfo-contenu"},o.a.createElement("div",{class:"module-tuileInfo-texte"},e.texte),"true"===e.siBouton?o.a.createElement("div",{class:"module-tuileInfo-button"},o.a.createElement(p,{typeBouton:e.typeBouton,color:e.buttonColor,link:e.buttonLink,label:e.buttonLabel})):o.a.createElement("div",null))):void 0}a(49);function k(e){var t="Disponible le "+e.jourDispo+" "+e.moisDispo+" "+e.anneeDispo+".",a="Disponible en "+e.moisDispo+" "+e.anneeDispo+".";return"true"===e.siDateDeDispo?o.a.createElement("div",{class:"module-tuileMemories"},o.a.createElement("div",{style:{backgroundImage:"url("+e.img1+")"},class:"module-tuileMemories-image"}),o.a.createElement("div",{class:"module-tuileMemories-titres"},o.a.createElement("div",{class:"module-tuileMemories-titreGauche"},e.titreGauche),o.a.createElement("div",{class:"module-tuileMemories-titreDroite"},e.titreDroite)),o.a.createElement("div",{class:"module-tuilesMemories-dateDispo"},""===e.jourDispo?a:t)):o.a.createElement("div",{class:"module-tuileMemories"},o.a.createElement("a",{href:e.lien,target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"}},o.a.createElement("div",{style:{backgroundImage:"url("+e.img1+")"},class:"module-tuileMemories-image"},"true"===e.siNouveau?o.a.createElement("div",{class:"module-tuileMemories-nouveau"},"Nouveau"):o.a.createElement("div",null))),o.a.createElement("div",{class:"module-tuileMemories-titres"},o.a.createElement("div",{class:"module-tuileMemories-titreGauche"},e.titreGauche),o.a.createElement("div",{class:"module-tuileMemories-titreDroite"},e.titreDroite)),o.a.createElement("div",{class:"module-tuilesMemories-description"},e.description))}a(50);function B(e){var t="A partir de "+e.prix,a=e.prix;return""===e.lien?o.a.createElement("div",{class:"module-tuileShop"},o.a.createElement("div",{class:"module-tuileShop-imageProduit"},o.a.createElement("img",{src:e.imageProduit,alt:e.title})),o.a.createElement("div",{class:"module-tuileShop-infosProduit"},"true"===e.siNouveauProduit?o.a.createElement("div",{class:"module-tuileShop-infosProduit-siNouveaut\xe9"},"Nouveau"):o.a.createElement("div",null),o.a.createElement("div",{class:"module-tuileShop-infosProduit-nom"},e.nomProduit),o.a.createElement("div",{class:"module-tuileShop-infosProduit-prix"},"true"===e.siPrixExact?a:t),"Disponible"===e.etatProduit||"En stock"===e.etatProduit?o.a.createElement("div",{class:"module-tuileShop-infosProduit-etatProduit disponible"},e.etatProduit):o.a.createElement("div",null),"Indisponible"===e.etatProduit?o.a.createElement("div",{class:"module-tuileShop-infosProduit-etatProduit indisponible"},e.etatProduit):o.a.createElement("div",null))):o.a.createElement("div",{class:"module-tuileShop"},o.a.createElement("a",{href:e.lien,target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"}},o.a.createElement("div",{class:"module-tuileShop-imageProduit"},o.a.createElement("img",{src:e.imageProduit,alt:e.title})),o.a.createElement("div",{class:"module-tuileShop-infosProduit"},"true"===e.siNouveauProduit?o.a.createElement("div",{class:"module-tuileShop-infosProduit-siNouveaut\xe9"},"Nouveau"):o.a.createElement("div",null),o.a.createElement("div",{class:"module-tuileShop-infosProduit-nom"},e.nomProduit),o.a.createElement("div",{class:"module-tuileShop-infosProduit-prix"},"true"===e.siPrixExact?a:t),"Disponible"===e.etatProduit||"En stock"===e.etatProduit?o.a.createElement("div",{class:"module-tuileShop-infosProduit-etatProduit disponible"},e.etatProduit):o.a.createElement("div",null),"Indisponible"===e.etatProduit?o.a.createElement("div",{class:"module-tuileShop-infosProduit-etatProduit indisponible"},e.etatProduit):o.a.createElement("div",null))))}function L(e){var t=e.display,a=e.type;return"false"===t?null:"mix"===a?o.a.createElement(h,{typeMix:e.typeMix,status:e.status,imgurl:e.imgurl,linkGlobal:e.linkGlobal,title:e.title,description:e.description,date:e.date,typeBouton:e.typeBouton,numberButtons:e.numberButtons,buttonColor:e.buttonColor,buttonLabel:e.buttonLabel,buttonLink:e.buttonLink,last:e.last}):"event"===a?o.a.createElement(x,{typeEvent:e.typeEvent,title:e.title,lieu:e.lieu,date:e.date,status:e.status,description:e.description,typeBouton:e.typeBouton,button1Color:e.button1Color,button1Label:e.button1Label,button1Link:e.button1Link,button2Color:e.button2Color,button2Label:e.button2Label,button2Link:e.button2Link,isLast:e.isLast}):"info"===a?o.a.createElement(y,{texte:e.texte,typeInfo:e.typeInfo,siBouton:e.siBouton,typeBouton:e.typeBouton,buttonColor:e.buttonColor,buttonLink:e.buttonLink,buttonLabel:e.buttonLabel}):"memories"===a?o.a.createElement(k,{img1:e.img1,titreGauche:e.titreGauche,titreDroite:e.titreDroite,description:e.description,lien:e.lien,siNouveau:e.siNouveau,siDateDeDispo:e.siDateDeDispo,jourDispo:e.jourDispo,moisDispo:e.moisDispo,anneeDispo:e.anneeDispo}):"shop"===a?o.a.createElement(B,{imageProduit:e.imageProduit,nomProduit:e.nomProduit,siNouveauProduit:e.siNouveauProduit,siPrixExact:e.siPrixExact,prix:e.prix,etatProduit:e.etatProduit,lien:e.lien}):null}var M=a(28),C=a.n(M),A=a(16),j=a.n(A),P=(a(51),a(29)),w=a.n(P),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"page-accueil"},o.a.createElement(L,{display:"true",type:"mix",typeMix:"large",status:"online",imgurl:w.a,linkGlobal:"",title:"Let's give 'em AMB !",description:"Le sweat de promo 2020/2021 est disponible !",date:"Commandes ouvertes jusqu'au 2 novembre \xe0 18h !",typeBouton:"interne",numberButtons:"1",buttonColor:"white",buttonLabel:"Je le veux !",buttonLink:"/shop",last:"fast"}),o.a.createElement(L,{display:"true",type:"mix",typeMix:"large",status:"online",imgurl:C.a,linkGlobal:"",title:"Memories",description:"Les souvenirs miagistes d'une d\xe9cennie.",date:"Captain Croch'WEI disponible !",typeBouton:"interne",numberButtons:"1",buttonColor:"white",buttonLabel:"En savoir plus",buttonLink:"/memories",last:"fast"}),o.a.createElement(L,{display:"true",type:"mix",typeMix:"large",status:"online",imgurl:j.a,linkGlobal:"",title:"Adh\xe9rer \xe0 l'AMB",description:"Une nouvelle ann\xe9e commence...",date:"Adh\xe9sion au stand ou en ligne !",typeBouton:"interne",numberButtons:"1",buttonColor:"white",buttonLabel:"En savoir plus",buttonLink:"/association/adhesion",last:""}))}}]),a}(n.Component),S=(a(52),a(19)),D=a.n(S);function O(){var e=document.getElementById("module-navbar-column-menu");e.style.display,e.style.display="none"}var q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){O()}},{key:"render",value:function(){var e="/",t="Accueil",a="/",n="Events",i="/events",l="Memories",s="/memories",u="Shop",c="/shop";return o.a.createElement("div",{class:"module-navbar"},o.a.createElement("div",{class:"module-navbar-row"},o.a.createElement("div",{class:"module-navbar-row-logo"},o.a.createElement(r.b,{class:"module-navbar-row-logo-img",to:e},o.a.createElement("img",{src:D.a,alt:"Logo"}))),o.a.createElement("div",{class:"module-navbar-row-menu"},o.a.createElement("div",{class:"module-navbar-row-menu-lien"},o.a.createElement(r.b,{to:a},t)),o.a.createElement("div",{class:"module-navbar-row-menu-lien module-navbar-row-menu-lien-margin-left"},o.a.createElement(r.b,{to:i},n)),o.a.createElement("div",{class:"module-navbar-row-menu-lien module-navbar-row-menu-lien-margin-left"},o.a.createElement(r.b,{to:s},l)),o.a.createElement("div",{class:"module-navbar-row-menu-lien module-navbar-row-menu-lien-margin-left"},o.a.createElement(r.b,{to:c},u)))),o.a.createElement("div",{class:"module-navbar-column"},o.a.createElement("div",{class:"module-navbar-column-first-row"},o.a.createElement("div",{class:"module-navbabr-column-first-row-logo"},o.a.createElement(r.b,{class:"module-navbabr-column-first-row-logo-img",to:e,onClick:O},o.a.createElement("img",{src:D.a,alt:"Logo"}))),o.a.createElement("div",{className:"module-navbabr-column-first-row-icon",onClick:function(){var e=document.getElementById("module-navbar-column-menu");"none"===e.style.display?e.style.display="flex":e.style.display="none"}},o.a.createElement("i",{class:"fa fa-bars"}))),o.a.createElement("div",{id:"module-navbar-column-menu",class:"module-navbar-column-menu"},o.a.createElement("div",{class:"module-navbar-column-menu-lien"},o.a.createElement(r.b,{to:a,onClick:O},t)),o.a.createElement("div",{class:"module-navbar-column-menu-lien module-navbar-column-menu-lien-marginTop"},o.a.createElement(r.b,{to:i,onClick:O},n)),o.a.createElement("div",{class:"module-navbar-column-menu-lien module-navbar-column-menu-lien-marginTop"},o.a.createElement(r.b,{to:s,onClick:O},l)),o.a.createElement("div",{class:"module-navbar-column-menu-lien module-navbar-column-menu-lien-marginTop"},o.a.createElement(r.b,{to:c,onClick:O},u)))))}}]),a}(n.Component),G=(a(53),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{class:"module-footer"},o.a.createElement("div",{class:"module-footer-mentions"},"Copyright \xa9 2020 Asso MIAGE Bordeaux. Tous droits r\xe9serv\xe9s."))}}]),a}(n.Component)),N=(a(54),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{class:"page-404"},o.a.createElement("div",{class:"page-404-bloc"},o.a.createElement("div",{class:"page-404-bloc-titre"},"Page non trouv\xe9e"),o.a.createElement("div",{class:"page-404-bloc-description"},"Cette page n'existe pas ou n'existe plus."),o.a.createElement("div",{class:"page-404-bloc-buttons"},o.a.createElement(p,{color:"bleuAMB",label:"Revenir \xe0 l'accueil",link:"/"}))))}}]),a}(n.Component)),z=a(30),W=a.n(z),T=a(31),V=a.n(T),_=(a(55),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{class:"page-memories"},o.a.createElement("div",{style:{backgroundImage:"url("+W.a+")"},class:"page-memories-illustration"},o.a.createElement("div",{class:"page-memories-illustration-infos"},o.a.createElement("div",{class:"page-memories-illustration-infos-titre"},"Memories"),o.a.createElement("div",{class:"page-memories-illustration-infos-subtitle"},"Les souvenirs miagistes d'une d\xe9cennie"))),o.a.createElement("div",{class:"page-memories-content"},o.a.createElement("div",{class:"page-memories-content-margin"},o.a.createElement("div",{class:"page-memories-content-title"},"WEIs"),o.a.createElement(L,{display:"true",type:"memories",img1:V.a,titreGauche:"Captain Croch'WEI",titreDroite:"2019",description:"Embarquez moussaillons, fiers z'et hardis, avec le Captain Croch'WEI pour un week-end explosif !",lien:"https://photos.app.goo.gl/c7NTEZ9FSbMVmkke6",siNouveau:"true",siDateDeDispo:"false",jourDispo:"3",moisDispo:"octobre",anneeDispo:"2020"})),o.a.createElement("div",{id:"page-memories-conditions",class:"page-memories-conditions"},"Toutes les photos sont stock\xe9es sur Google Photos de mani\xe8re s\xe9curis\xe9e. Vous pouvez t\xe9l\xe9charger l'application Google Photos pour ",o.a.createElement("a",{href:"https://apps.apple.com/fr/app/google-photos/id962194608",target:"_blank",rel:"noopener noreferrer nofollow"},"iOS")," et ",o.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=fr",target:"_blank",rel:"noopener noreferrer nofollow"},"Android"),". Si vous souhaitez signaler une ou plusieurs photos pour qu'elle(s) soi(en)t retir\xe9e(s), veuillez nous communiquer votre nom, pr\xe9nom, la capture d'\xe9cran de la ou des dite(s) photo(s), ainsi qu'un paragraphe explicatif. Envoyez le tout \xe0 cette adresse mail : asso@miagebordeaux.fr ou en cliquant ",o.a.createElement("a",{href:"mailto:asso@miagebordeaux.fr"},"ici"),".")))}}]),a}(n.Component)),J=a(14),K=a.n(J),R=a(32),F=a.n(R),H=a(33),Q=a.n(H),U=(a(56),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e="https://www.helloasso.com/associations/asso-miage-bordeaux/evenements/pull-de-promo-de-la-miage-de-bordeaux-edition-2020-2021";return o.a.createElement("div",{class:"page-shop"},o.a.createElement("div",{style:{backgroundImage:"url("+K.a+")"},class:"page-shop-illustration"},o.a.createElement("div",{class:"page-shop-illustration-infos"},o.a.createElement("div",{class:"page-shop-illustration-infos-titre"},"Shop AMB"),o.a.createElement("div",{class:"page-shop-illustration-infos-subtitle"},"La panoplie compl\xe8te du bon miagiste"))),o.a.createElement(L,{display:"true",type:"info",texte:"Profitez d'un tarif avantageux sur le sweat de promo en \xe9tant adh\xe9rent : \xe0 partir de 27\u20ac au lieu de 29\u20ac ! Vous n'\xeates pas adh\xe9rent ? Venez adh\xe9rer au local lors de votre commande ou choisissez le tarif avec Adh\xe9sion 2020/2021 sur HelloAsso pour gagner du temps !",typeInfo:"info",siBouton:"false",typeBouton:"interne",buttonColor:"white",buttonLink:"/association/adhesion",buttonLabel:"J'adh\xe8re"}),o.a.createElement("div",{class:"page-shop-content"},o.a.createElement("div",{class:"page-shop-articles"},o.a.createElement(L,{display:"true",type:"shop",imageProduit:F.a,nomProduit:"Sweat Straight Outta Miage Bordeaux 2020/2021 - Black",siNouveauProduit:"true",siPrixExact:"false",prix:"27,00 \u20ac",etatProduit:"Disponible",lien:e}),o.a.createElement(L,{display:"true",type:"shop",imageProduit:Q.a,nomProduit:"Sweat Straight Outta Miage Bordeaux 2020/2021 - Dark Blue",siNouveauProduit:"true",siPrixExact:"false",prix:"27,00 \u20ac",etatProduit:"Disponible",lien:e})),o.a.createElement("div",{id:"page-shop-conditions",class:"page-shop-conditions"},"Le shop AMB ne s'occupe que des goodies et v\xeatements vendus par l'Asso MIAGE Bordeaux, pour les r\xe9servations d'\xe9v\xe8nements (WEI, WES...etc), dirigez vous vers la page \"Events\". La commande en ligne n'est en r\xe9alit\xe9 qu'un paiement en ligne. Ce paiement s'effectue via HelloAsso, une solution de gestion de billeterie destin\xe9e aux associations. Il s'agit d'un site s\xe9curis\xe9, les diff\xe9rents moyens de paiement accept\xe9s sont : Carte bancaire. Il est possible de venir commander au local de l'Asso MIAGE Bordeaux. Les produits command\xe9s sont \xe0 r\xe9cup\xe9rer au local de l'AMB.")))}}]),a}(n.Component));a(26),a(57);function Z(e){return o.a.createElement("div",{class:"module-articleShop"},o.a.createElement("div",{class:"module-articleShop-illustrationTop",style:{backgroundImage:"url("+K.a+")"}},o.a.createElement("div",{class:"module-articleShop-illustrationTop-title"},"Shop AMB")),o.a.createElement("div",{class:"module-articleShop-margin"},o.a.createElement("div",{class:"module-articleShop-content"},o.a.createElement("div",{class:"module-articleShop-content-infos"},o.a.createElement("div",{class:"module-articleShop-content-infos-siNouveau"},"Nouveau"),o.a.createElement("div",{class:"module-articleShop-content-infos-nomArticle"},"Sweat x"),o.a.createElement("div",{class:"module-articleShop-content-infos-prix"}),o.a.createElement("div",{class:"module-articleShop-content-infos-disponibilite"}),o.a.createElement("div",{class:"module-articleShop-content-infos-coloris"}),o.a.createElement("div",{class:"module-articleShop-content-infos-tailles"}),o.a.createElement("div",{class:"module-articleShop-content-infos-detailsCommande"}),o.a.createElement("div",{class:"module-articleShop-content-infos-retraitCommande"}),o.a.createElement("div",{class:"module-articleShop-content-infos-infosProduit"}),o.a.createElement("div",{class:"module-articleShop-content-infos-commander"})),o.a.createElement("div",{class:"module-articleShop-content-gallery"}))))}n.Component,a(58);var X=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{class:"page-events"},o.a.createElement("div",{class:"page-events-title"},"Events"),o.a.createElement("div",{class:"page-events-subtitle"},"Events pass\xe9s"),o.a.createElement(L,{display:"true",type:"event",status:"over",typeEvent:"unspecified",title:"L'enqu\xeate des parrains",lieu:"A22 - Amphi Darwin",date:"mercredi 7 octobre 2020",description:"Un meurtre a \xe9t\xe9 commis, les indices et messages cod\xe9s se multiplient, saurez-vous trouver le tueur ?",typeBouton:"interne",button1Color:"bleuAMB",button1Label:"En savoir plus",button1Link:"/events/parrainage",isLast:"false"}),o.a.createElement(L,{display:"true",type:"event",status:"over",typeEvent:"afterwork",title:"Afterwork AMB x JMC",lieu:"Carnaval Caf\xe9",date:"mercredi 9 septembre 2020",description:"Venez d\xe9couvrir les deux assos de la formation MIAGE :  l'AMB, le Bureau des El\xe8ves et JMC, la Junior-Entreprise.",typeBouton:"interne",button1Color:"bleuAMB",button1Label:"En savoir plus",button1Link:"/events/aw-amc-jmc",isLast:"true"}))}}]),a}(n.Component);a(59);function Y(e){return o.a.createElement("div",{class:"page-communique"},o.a.createElement("div",{class:"page-communique-titre"},e.titre),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe1),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe2),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe3),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe4),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe5),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe6),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe7),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe8),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe9),o.a.createElement("div",{class:"page-communique-paragraphe"},e.paragraphe10),o.a.createElement("div",{class:"page-communique-signatures"},o.a.createElement("div",{class:"page-communique-signature"},e.signature1),o.a.createElement("div",{class:"page-communique-signature"},e.signature2)))}var $=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(Y,{titre:"Annulation du WEI 2020",paragraphe1:"Chers miagistes,",paragraphe2:"Suite aux r\xe9centes mesures annonc\xe9es par la pr\xe9f\xe8te de Gironde, c'est avec grand regret que l'Asso MIAGE Bordeaux vous annonce l'annulation du Week-end d'Int\xe9gration 2020 : le Wei'cing\xe9torix, initialement pr\xe9vu les 3 et 4 octobre 2020.",paragraphe3:"Jusqu\u2019\xe0 pr\xe9sent, l\u2019organisation de ce WEI suivait son cours. En effet, nous avions jug\xe9 l\u2019\xe9v\xe8nement r\xe9alisable en tenant compte des diff\xe9rentes mesures sanitaires recommand\xe9es. Des ajustements avaient \xe9t\xe9 planifi\xe9s que ce soit pour le transport, les activit\xe9s, la soir\xe9e ou l\u2019h\xe9bergement, tout \xe7a, afin de limiter au maximum les risques de cluster.",paragraphe4:"Malheureusement pour nous (et pour vous), la d\xe9cision est tomb\xe9e ce lundi 14 septembre peu apr\xe8s 15 h : pour ralentir la propagation du COVID-19 dans le d\xe9partement, les f\xeates \xe9tudiantes seront emp\xeach\xe9es. M\xeame si le WEI \xe9tait situ\xe9 dans le Lot-et-Garonne, et n\u2019\xe9tait donc pas soumis \xe0 la mesure annonc\xe9e, nous n\u2019avons pas voulu courir de risques que ce soit pour vous ou pour nous, \xe9tant donn\xe9 les enjeux.",paragraphe5:"Nous allons donc nous conformer aux mesures prises par la pr\xe9f\xe8te dans l\u2019espoir qu\u2019elles permettent un retour \xe0 la normale le plus vite possible !",paragraphe6:"Rassurez-vous, l\u2019AMB est toujours l\xe0 et de nombreux events auront lieu tout ce semestre dans le respect des r\xe8gles sanitaires. Le premier d\u2019entre eux sera l\u2019event parrainage, lui aussi perturb\xe9 par les d\xe9cisions de ce d\xe9but de semaine. On vous donnera tr\xe8s bient\xf4t des infos sur son d\xe9roulement, alors restez connect\xe9s !",paragraphe7:"L\u2019ann\xe9e 2021 sera elle aussi marqu\xe9e par de gros events d\xe9j\xe0 pr\xe9vus depuis cet \xe9t\xe9 (on croise les doigts) qu\u2019ils soient \xe0 port\xe9e locale ou nationale. On a h\xe2te ! (et vous aussi on esp\xe8re).",paragraphe8:"C\u2019est une ann\xe9e particuli\xe8re, c\u2019est pour cela que nous allons nous plier en quatre et redoubler d\u2019imagination pour vous proposer des events exclusifs \u201cCOVID-friendly\u201d \xe0 la sauce miagiste !",paragraphe9:"La force de la MIAGE est son r\xe9seau, depuis l\u2019int\xe9gration des nouveaux jusqu\u2019au maintien du lien avec les anciens, en passant par les \xe9v\xe8nements inter-assos. Nous sommes solidaires des autres associations miagistes de France qui ont vu, eux aussi, leurs diff\xe9rents events d\u2019int\xe9gration perturb\xe9s ou annul\xe9s depuis la rentr\xe9e. \xc0 nous de nous adapter et de rebondir !",paragraphe10:"Prenez soin de vous, et de vos proches. Respectez les mesures sanitaires et les gestes barri\xe8res. On se retrouve tr\xe8s vite !",signature1:"Miagistement votre,",signature2:"L\u2019AMB"})}}]),a}(n.Component),ee=(a(60),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(s.a,{to:"/"})}}]),a}(n.Component)),te=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.Component),ae=Object(s.g)(te),ne=(a(61),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{class:"page-adhesion"},o.a.createElement("div",{class:"page-adhesion-title"},"Adh\xe9sion"),o.a.createElement("div",{class:"page-adhesion-subtitle"},"Pourquoi adh\xe9rer \xe0 l'AMB ?"),o.a.createElement("div",{class:"page-paragraphe"},"Parce que c'est le meilleur moyen d'obtenir des bons plans. L'adh\xe9sion AMB permet d'avoir des r\xe9ductions sur de nombreux events organis\xe9s au fil de l'ann\xe9e par l'AMB (Afterworks, WEI, Laser-game, Bar...etc)."),o.a.createElement("div",{class:"page-adhesion-subtitle"},"Quels avantages avec cette adh\xe9sion ?"),o.a.createElement("div",{class:"page-paragraphe"},"Les avantages li\xe9es \xe0 l'adh\xe9sion AMB sont nombreux :",o.a.createElement("ul",null,o.a.createElement("li",null,"R\xe9duction sur l'entr\xe9e aux Afterworks organis\xe9s par l'AMB ;"),o.a.createElement("li",null,"Acc\xe8s aux events majeurs organis\xe9s par l'AMB comme le WEI (Week-end d'Int\xe9gration) et le WES (Week-end Ski) ;"),o.a.createElement("li",null,"Acc\xe8s aux \xe9tablissements partenaires de l'AMB. D\xe9tails \xe0 venir ;"),o.a.createElement("li",null,"Acc\xe8s aux offres partenaires d'ATENA (par exemple : le pass CITICKS avec l'adh\xe9sion) ;"),o.a.createElement("li",null,"Acc\xe8s aux events Miage Connection organis\xe9s partout en France.")),"Vous permettez aussi au bureau des \xe9l\xe8ves d'organiser des events tout au long de l'ann\xe9e."),o.a.createElement("div",{class:"page-adhesion-subtitle"},"Qu'est-ce que la carte AMB ?"),o.a.createElement("div",{class:"page-paragraphe"},"La carte AMB permet d'avoir acc\xe8s aux avantages AMB \xe0 travers les diff\xe9rents \xe9tablissements partenaires, en dehors de tout event organis\xe9 par l'AMB. Carte \xe0 venir..."),o.a.createElement("div",{class:"page-adhesion-subtitle"},"Combien co\xfbte l'adh\xe9sion ?"),o.a.createElement("div",{class:"page-paragraphe"},"Le prix de l'adh\xe9sion a \xe9t\xe9 fix\xe9e \xe0 5\u20ac pour l'ann\xe9e universiaire 2020/2021. Il permet d'acc\xe9der \xe0 tous les avantages AMB. L'adh\xe9sion permet d'acc\xe9der au pass CITICKS Bordeaux \xe0 prix r\xe9duit (1\u20ac50 au lieu de 5\u20ac). ",o.a.createElement("a",{href:"https://www.citicks.fr/bordeaux",target:"_blank",rel:"noopener noreferrer nofollow"},"Qu'est-ce que le pass CITICKS ?"),o.a.createElement("br",null),"Attention, seulement 75 pass CITICKS Bordeaux \xe0 1\u20ac50 sont disponibles."),o.a.createElement("div",{class:"page-adhesion-subtitle"},"Comment adh\xe9rer ?"),o.a.createElement("div",{class:"page-paragraphe"},"Tu peux adh\xe9rer de deux fa\xe7ons diff\xe9rentes \xe0 l'AMB, en pr\xe9sentiel ou \xe0 distance."),o.a.createElement("div",{class:"page-column page-section-final"},o.a.createElement("div",{class:"page-column-section page-column-section-margin"},o.a.createElement("div",{class:"page-column-section-title"},"Pr\xe9sentiel"),o.a.createElement("div",{class:"page-column-section-paragraphe"},"Vous pouvez venir adh\xe9rer sur place au stand de l'AMB (d\xe9tails \xe0 venir), au local dans le b\xe2timent A21 (d\xe9tails \xe0 venir) ou aupr\xe8s d'un membre de l'AMB.")),o.a.createElement("div",{class:"page-column-section"},o.a.createElement("div",{class:"page-column-section-title"},"A Distance"),o.a.createElement("div",{class:"page-column-section-paragraphe"},'Vous pouvez adh\xe9rer en ligne \xe0 travers le portail HelloAsso via une carte bancaire. Site et paiement s\xe9curis\xe9s. Nous vous informerons quand votre carte AMB sera disponible. Si vous choisissez de prendre le pass CITICKS Bordeaux, il faudra venir le chercher sur place (voir partie "Pr\xe9sentiel").'),o.a.createElement("div",{class:"page-column-section-link"},o.a.createElement("a",{href:"https://www.helloasso.com/associations/asso-miage-bordeaux/adhesions/adhesion-asso-miage-bordeaux-2020-2021",target:"_blank",rel:"noopener noreferrer nofollow"},"S'inscrire en ligne")))))}}]),a}(n.Component)),oe=o.a.createElement(r.a,{basename:"".concat("","/")},o.a.createElement(ae,null,o.a.createElement(q,null),o.a.createElement(s.d,null,o.a.createElement(s.b,{exact:!0,path:"/",component:I}),o.a.createElement(s.b,{exact:!0,path:"/events",component:X}),o.a.createElement(s.b,{exact:!0,path:"/memories",component:_}),o.a.createElement(s.b,{exact:!0,path:"/shop",component:U}),o.a.createElement(s.b,{exact:!0,path:"/communiques/weicingetorix",component:$}),o.a.createElement(s.b,{exact:!0,path:"/association/adhesion",component:ne}),o.a.createElement(s.b,{exact:!0,path:"/wordpress",component:ee}),o.a.createElement(s.b,{component:N})),o.a.createElement(G,null)));l.a.render(oe,document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.2e5d8962.chunk.js.map