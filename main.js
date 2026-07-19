/* ══════════════════════════════════════════════════════════════
   FixPro Línea Blanca — main.js
   Preloader, transición de entrada, typewriter, partículas,
   scroll reveal, parallax y formulario de contacto (WhatsApp).
   ══════════════════════════════════════════════════════════════ */
(function(){
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var WHATSAPP_NUMBER = "526461315743";

  /* ── Utilidades ─────────────────────────────────────────────── */
  function rand(min,max){ return Math.random()*(max-min)+min; }

  function spawnParticles(container, count, opts){
    if(!container) return;
    opts = opts || {};
    var minSize = opts.minSize || 2, maxSize = opts.maxSize || 4;
    var minDur = opts.minDur || 9, maxDur = opts.maxDur || 20;
    for(var i=0;i<count;i++){
      var span = document.createElement("span");
      var size = rand(minSize,maxSize);
      span.style.width = size+"px";
      span.style.height = size+"px";
      span.style.left = rand(0,100)+"%";
      span.style.animationDuration = rand(minDur,maxDur)+"s";
      span.style.animationDelay = rand(0,minDur)+"s";
      container.appendChild(span);
    }
  }

  function spawnBubbles(container, count){
    if(!container) return;
    for(var i=0;i<count;i++){
      var span = document.createElement("span");
      var size = rand(6,16);
      span.style.width = size+"px";
      span.style.height = size+"px";
      span.style.left = rand(2,98)+"%";
      span.style.setProperty("--drift", rand(-40,40)+"px");
      span.style.animationDuration = rand(10,22)+"s";
      span.style.animationDelay = rand(0,14)+"s";
      container.appendChild(span);
    }
  }

  /* ── Preloader ──────────────────────────────────────────────── */
  function initPreloader(){
    var preloader = document.getElementById("preloader");
    var bar = document.getElementById("progressBar");
    var pct = document.getElementById("progressPercent");
    var particles = document.getElementById("preloaderParticles");
    document.body.classList.add("no-scroll");

    spawnParticles(particles, 26, {minDur:6, maxDur:11});

    var progress = 0;
    var minDuration = reduceMotion ? 400 : 2100;
    var startTime = Date.now();
    var pageLoaded = false;

    window.addEventListener("load", function(){ pageLoaded = true; });

    function tick(){
      var elapsed = Date.now() - startTime;
      var target = Math.min(100, (elapsed / minDuration) * 100);
      progress += (target - progress) * 0.18;
      if(progress > 99.4) progress = 99.4;
      if(bar) bar.style.width = progress + "%";
      if(pct) pct.textContent = Math.floor(progress) + "%";

      var timeIsUp = elapsed >= minDuration;
      if(timeIsUp && (pageLoaded || elapsed > minDuration + 2500)){
        if(bar) bar.style.width = "100%";
        if(pct) pct.textContent = "100%";
        setTimeout(finishPreloader, 220);
      } else {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);

    function finishPreloader(){
      preloader.classList.add("preloader--exit");
      document.body.classList.remove("no-scroll");
      revealHero();
      var handled = false;
      preloader.addEventListener("transitionend", function onEnd(e){
        if(e.propertyName !== "clip-path" || handled) return;
        handled = true;
        preloader.classList.add("preloader--hidden");
        preloader.removeEventListener("transitionend", onEnd);
      });
      setTimeout(function(){
        if(!handled){ preloader.classList.add("preloader--hidden"); }
      }, 1700);
    }
  }

  /* ── Entrada escalonada del Hero ────────────────────────────── */
  function revealHero(){
    var items = document.querySelectorAll(".hero-in-item");
    items.forEach(function(el, i){
      setTimeout(function(){ el.classList.add("visible"); }, 160 + i*150);
    });
    startTypewriter();
  }

  /* ── Typewriter con palabras rotativas + degradado animado ─── */
  function startTypewriter(){
    var el = document.getElementById("heroTypewriter");
    if(!el) return;
    var words = [];
    try{ words = JSON.parse(el.getAttribute("data-words") || "[]"); }catch(e){ words = []; }
    if(!words.length) return;

    var cursor = document.createElement("span");
    cursor.className = "typewriter-cursor";
    cursor.setAttribute("aria-hidden","true");

    var textSpan = document.createElement("span");
    textSpan.className = "tw-text";
    el.textContent = "";
    el.appendChild(textSpan);
    el.appendChild(cursor);

    if(reduceMotion){
      textSpan.textContent = words[0];
      return;
    }

    var wordIndex = 0, charIndex = 0, deleting = false;

    function step(){
      var current = words[wordIndex];
      if(!deleting){
        charIndex++;
        textSpan.textContent = current.slice(0, charIndex);
        if(charIndex === current.length){
          deleting = true;
          setTimeout(step, 1700);
          return;
        }
        setTimeout(step, 68);
      } else {
        charIndex--;
        textSpan.textContent = current.slice(0, charIndex);
        if(charIndex === 0){
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(step, 380);
          return;
        }
        setTimeout(step, 32);
      }
    }
    setTimeout(step, 90);
  }

  /* ── Canvas de partículas conectadas del Hero ─────────────────*/
  function initHeroCanvas(){
    var canvas = document.getElementById("heroCanvas");
    if(!canvas || reduceMotion) return;
    var ctx = canvas.getContext("2d");
    var w,h, nodes = [];
    var NODE_COUNT = window.innerWidth < 720 ? 26 : 52;

    function resize(){
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    function makeNodes(){
      nodes = [];
      for(var i=0;i<NODE_COUNT;i++){
        nodes.push({
          x: Math.random()*w, y: Math.random()*h,
          vx: rand(-0.18,0.18), vy: rand(-0.18,0.18)
        });
      }
    }
    function step(){
      ctx.clearRect(0,0,w,h);
      for(var i=0;i<nodes.length;i++){
        var n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if(n.x < 0 || n.x > w) n.vx *= -1;
        if(n.y < 0 || n.y > h) n.vy *= -1;
      }
      for(var i=0;i<nodes.length;i++){
        for(var j=i+1;j<nodes.length;j++){
          var a = nodes[i], b = nodes[j];
          var dx = a.x-b.x, dy = a.y-b.y;
          var dist = Math.sqrt(dx*dx+dy*dy);
          if(dist < 130){
            ctx.strokeStyle = "rgba(56,189,248,"+(0.16*(1-dist/130))+")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
            ctx.stroke();
          }
        }
      }
      for(var i=0;i<nodes.length;i++){
        ctx.fillStyle = "rgba(199,204,209,0.55)";
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, 1.6, 0, Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(step);
    }
    resize(); makeNodes(); step();
    window.addEventListener("resize", function(){ resize(); makeNodes(); });
  }

  /* ── Navbar: estado scrolled + menú móvil ─────────────────────*/
  function initNavbar(){
    var navbar = document.getElementById("navbar");
    var hamburger = document.getElementById("hamburger");
    var mobileMenu = document.getElementById("mobileMenu");
    var scrim = document.getElementById("menuScrim");

    function onScroll(){
      if(window.scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }
    document.addEventListener("scroll", onScroll, {passive:true});
    onScroll();

    function toggleMenu(open){
      var isOpen = open !== undefined ? open : !mobileMenu.classList.contains("open");
      mobileMenu.classList.toggle("open", isOpen);
      hamburger.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
      if(scrim) scrim.classList.toggle("open", isOpen);
      document.body.classList.toggle("no-scroll", isOpen);
    }
    if(hamburger){
      hamburger.addEventListener("click", function(){ toggleMenu(); });
    }
    if(scrim){
      scrim.addEventListener("click", function(){ toggleMenu(false); });
    }
    document.querySelectorAll(".mobile-link, .mobile-cta").forEach(function(a){
      a.addEventListener("click", function(){ toggleMenu(false); });
    });
  }

  /* ── Scroll reveal (IntersectionObserver) ─────────────────────*/
  function initScrollReveal(){
    var targets = document.querySelectorAll(".reveal-up, .stagger-card");
    if(!("IntersectionObserver" in window)){
      targets.forEach(function(el){ el.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.14, rootMargin:"0px 0px -60px 0px"});
    targets.forEach(function(el){ io.observe(el); });
  }

  /* ── Parallax en imágenes de fondo ─────────────────────────────*/
  function initParallax(){
    if(reduceMotion) return;
    var imgs = document.querySelectorAll(".js-parallax-bg");
    if(!imgs.length) return;
    var ticking = false;
    function update(){
      var vh = window.innerHeight;
      imgs.forEach(function(img){
        var rect = img.parentElement.getBoundingClientRect();
        if(rect.bottom < 0 || rect.top > vh) return;
        var progress = (rect.top) / vh;
        var offset = progress * 46;
        img.style.transform = "translateY(" + offset.toFixed(1) + "px) scale(1.12)";
      });
      ticking = false;
    }
    document.addEventListener("scroll", function(){
      if(!ticking){ requestAnimationFrame(update); ticking = true; }
    }, {passive:true});
    window.addEventListener("resize", update);
    update();
  }

  /* ── Contador animado de estadísticas ───────────────────────── */
  function initStatCounters(){
    var stats = document.querySelectorAll(".stat-num[data-target]");
    if(!stats.length || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);
        var target = parseFloat(el.getAttribute("data-target"));
        var suffix = el.getAttribute("data-suffix") || "";
        var prefix = el.getAttribute("data-prefix") || "";
        if(reduceMotion || isNaN(target)){
          el.textContent = prefix + (isNaN(target) ? el.textContent : target) + suffix;
          return;
        }
        var start = 0, duration = 1400, startTime = null;
        function frame(ts){
          if(startTime===null) startTime = ts;
          var p = Math.min(1, (ts-startTime)/duration);
          var eased = 1 - Math.pow(1-p, 3);
          var val = Math.floor(start + (target-start)*eased);
          el.textContent = prefix + val + suffix;
          if(p < 1) requestAnimationFrame(frame);
          else el.textContent = prefix + target + suffix;
        }
        requestAnimationFrame(frame);
      });
    }, {threshold:0.4});
    stats.forEach(function(el){ io.observe(el); });
  }

  /* ── Formulario de contacto → WhatsApp ─────────────────────────*/
  function initContactForm(){
    var form = document.getElementById("contactForm");
    if(!form) return;
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var nombre = (form.nombre && form.nombre.value || "").trim();
      var telefono = (form.telefono && form.telefono.value || "").trim();
      var equipoSelect = form.equipo;
      var equipoTexto = equipoSelect ? equipoSelect.options[equipoSelect.selectedIndex].text : "";
      var zona = (form.zona && form.zona.value || "").trim();
      var mensaje = (form.mensaje && form.mensaje.value || "").trim();

      var lineas = ["Hola, quiero solicitar el servicio técnico:"];
      if(nombre) lineas.push("Nombre: " + nombre);
      if(telefono) lineas.push("Teléfono: " + telefono);
      if(equipoTexto && equipoSelect.value) lineas.push("Equipo: " + equipoTexto);
      if(zona) lineas.push("Zona/Colonia: " + zona);
      if(mensaje) lineas.push("Detalle: " + mensaje);

      var texto = encodeURIComponent(lineas.join("\n"));
      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + texto;
      window.open(url, "_blank", "noopener");
    });
  }

  /* ── Init ───────────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", function(){
    initPreloader();
    initNavbar();
    initHeroCanvas();
    spawnBubbles(document.getElementById("heroBubbles"), window.innerWidth < 720 ? 10 : 18);
    spawnParticles(document.getElementById("brandsParticles"), 16, {minDur:10, maxDur:20});
    spawnParticles(document.getElementById("promoParticles"), 14, {minDur:10, maxDur:20});
    spawnParticles(document.getElementById("authorityParticles"), 16, {minDur:10, maxDur:20});
    spawnParticles(document.getElementById("ctaFinalParticles"), 16, {minDur:10, maxDur:20});
    initScrollReveal();
    initParallax();
    initStatCounters();
    initContactForm();
  });

})();
