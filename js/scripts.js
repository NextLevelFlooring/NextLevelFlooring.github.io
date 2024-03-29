window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$( document ).ready(function() {
    $('.gallery .container .row .col-sm a').click(function() {
        var itemID = $(this).attr('href');
        $('.gallery ul').addClass('item_open');
        $(itemID).addClass('item_open');
        return false;
    });
    $('.close').click(function() {
        $('.port, .gallery ul').removeClass('item_open');
        return false;
    });

    $(".gallery .container .row .col-sm a").click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#top").offset().top) - $(".navbar").outerHeight()
        }, 400);
    });

    $('.slideshow').each(function(index) {
        $( this ).square1({
            theme: 'light',
            animation: 'slide',
            height: '400px',
            dots_nav: 'inside',
        });
    });

    setTimeout(() => {
        $("#container1").twentytwenty(
            {
                default_offset_pct: 0.5
            }
        );
    }, 200);
});

!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,a,s;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),y.push((o?"":"no-")+s.join("-"))}}function i(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?b.className.baseVal=n:b.className=n)}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){if("object"==typeof e)for(var t in e)_(e,t)&&l(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),i([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function f(e,n){return!!~(""+e).indexOf(n)}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function A(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?A(o,t||n):o);return!1}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function d(){var e=n.body;return e||(e=u(S?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var i,a,s,l,f="modernizr",A=u("div"),p=d();if(parseInt(r,10))for(;r--;)s=u("div"),s.id=o?o[r]:f+(r+1),A.appendChild(s);return i=u("style"),i.type="text/css",i.id="s"+f,(p.fake?p:A).appendChild(i),p.appendChild(A),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),A.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",l=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),a=t(A,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=l,b.offsetHeight):A.parentNode.removeChild(A),!!a}function g(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+a(n[o])+":"+r+")");return i=i.join(" or "),m("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function h(e,n,o,i){function a(){A&&(delete E.style,delete E.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=g(e,o);if(!r(l,"undefined"))return l}for(var A,p,c,d,m,h=["modernizr","tspan","samp"];!E.style&&h.length;)A=!0,E.modElem=u(h.shift()),E.style=E.modElem.style;for(c=e.length,p=0;c>p;p++)if(d=e[p],m=E.style[d],f(d,"-")&&(d=s(d)),E.style[d]!==t){if(i||r(o,"undefined"))return a(),"pfx"==n?d:!0;try{E.style[d]=o}catch(v){}if(E.style[d]!=m)return a(),"pfx"==n?d:!0}return a(),!1}function v(e,n,t,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+B.join(a+" ")+a).split(" ");return r(n,"string")||r(n,"undefined")?h(s,n,o,i):(s=(e+" "+U.join(a+" ")+a).split(" "),p(s,n,t))}var y=[],w=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var _,b=n.documentElement,S="svg"===b.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;_=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),C._l={},C.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=l}),Modernizr.addAsyncTest(function(){function e(e,n,t){function r(n){var r=n&&"load"===n.type?1==o.width:!1,i="webp"===e;l(e,i&&r?new Boolean(r):r),t&&t(n)}var o=new Image;o.onerror=r,o.onload=r,o.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var r=0;r<n.length;r++)e(n[r].name,n[r].uri)})});var x="Moz O ms Webkit",B=C._config.usePrefixes?x.split(" "):[];C._cssomPrefixes=B;var Q=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var a=0;o>a;a++){var s=prefixes[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+n}return!1};C.atRule=Q;var U=C._config.usePrefixes?x.toLowerCase().split(" "):[];C._domPrefixes=U;var R={elem:u("modernizr")};Modernizr._q.push(function(){delete R.elem});var E={style:R.elem.style};Modernizr._q.unshift(function(){delete E.style}),C.testAllProps=v;var T=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?Q(e):(-1!=e.indexOf("-")&&(e=s(e)),n?v(e,n,t):v(e,"pfx"))};C.prefixedCSS=function(e){var n=T(e);return n&&a(n)};o(),i(y),delete C.addTest,delete C.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);