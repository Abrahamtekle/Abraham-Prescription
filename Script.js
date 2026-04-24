// ── HARDCODED USER DATA ──────────────────────────────────────────
// Each object = one new tab with its own box design.
// Add more objects to open more tabs.

var users = [
  {
    brand:    "Abraham",
    subtitle: "Prescription",
    ptype:    "Ointment",
    qty:      "100",
    qtyunit:  "GRAMS",
    gstrip:   "100 · Effective Result",
    company:  "Abraham Pharma",
    address:  "123 Medical Lane, City · State",
    mfglic:   "MFG-001",
    batch:    "B-001",
    mfgdate:  "01/2026",
    expdate:  "12/2028",
    mrp:      "12.00",
    ing1n: "Salicylic Acid", ing1v: "10%",
    ing2n: "Urea",           ing2v: "20%",
    ing3n: "Zinc Oxide",     ing3v: "15%",
    ing4n: "Glycerin Base",  ing4v: "q.s."
  },
  {
    brand:    "Abraham",
    subtitle: "Prescription",
    ptype:    "Cream",
    qty:      "200",
    qtyunit:  "GRAMS",
    gstrip:   "200 · Premium Formula",
    company:  "Abraham Pharma",
    address:  "456 Health Ave, City · State",
    mfglic:   "MFG-002",
    batch:    "B-002",
    mfgdate:  "02/2026",
    expdate:  "01/2029",
    mrp:      "120.00",
    ing1n: "Hydrocortisone", ing1v: "5%",
    ing2n: "Aloe Vera",      ing2v: "30%",
    ing3n: "Vitamin E",      ing3v: "10%",
    ing4n: "Aqua Base",      ing4v: "q.s."
  }
];

// ── SVG HELPERS ──────────────────────────────────────────────────

function pillSVGSmall() {
  return '<svg viewBox="0 0 62 62" width="62" height="62" xmlns="http://www.w3.org/2000/svg">'
    + '<defs>'
    + '<radialGradient id="pg" cx="35%" cy="30%"><stop offset="0%" stop-color="#aee4ff"/><stop offset="100%" stop-color="#0055aa"/></radialGradient>'
    + '<radialGradient id="cg" cx="40%" cy="35%"><stop offset="0%" stop-color="#ffe090"/><stop offset="100%" stop-color="#c97a10"/></radialGradient>'
    + '</defs>'
    + '<rect x="10" y="22" width="42" height="18" rx="9" fill="url(#pg)"/>'
    + '<line x1="31" y1="22" x2="31" y2="40" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>'
    + '<rect x="31" y="22" width="21" height="18" rx="9" fill="url(#cg)"/>'
    + '<rect x="31" y="22" width="12" height="18" fill="url(#cg)"/>'
    + '<ellipse cx="18" cy="48" rx="7" ry="5" fill="#4db8ff" opacity="0.7"/>'
    + '<ellipse cx="44" cy="48" rx="6" ry="4" fill="#c9a84c" opacity="0.7"/>'
    + '</svg>';
}

function pillSVGLarge(brand, subtitle) {
  return '<svg viewBox="0 0 100 88" width="100" height="88" xmlns="http://www.w3.org/2000/svg">'
    + '<defs>'
    + '<radialGradient id="bg2" cx="40%" cy="35%"><stop offset="0%" stop-color="#aee4ff"/><stop offset="100%" stop-color="#0044aa"/></radialGradient>'
    + '<radialGradient id="cg2" cx="40%" cy="35%"><stop offset="0%" stop-color="#ffe090"/><stop offset="100%" stop-color="#b06a00"/></radialGradient>'
    + '<radialGradient id="tg" cx="35%" cy="30%"><stop offset="0%" stop-color="#ccf0ff"/><stop offset="100%" stop-color="#0066cc"/></radialGradient>'
    + '</defs>'
    + '<rect x="22" y="18" width="56" height="36" rx="8" fill="#f0f8ff" opacity="0.92"/>'
    + '<rect x="22" y="18" width="14" height="36" rx="8" fill="url(#bg2)"/>'
    + '<rect x="36" y="18" width="14" height="36" fill="url(#bg2)"/>'
    + '<rect x="50" y="18" width="28" height="36" fill="#e8f5ff" opacity="0.9"/>'
    + '<rect x="50" y="30" width="28" height="12" fill="#e0f0ff" opacity="0.7"/>'
    + '<rect x="30" y="26" width="40" height="20" rx="3" fill="white" opacity="0.18"/>'
    + '<text x="50" y="37" text-anchor="middle" font-size="7" font-weight="700" fill="white" font-family="Montserrat,sans-serif">' + brand.toUpperCase() + '</text>'
    + '<text x="50" y="44" text-anchor="middle" font-size="5" fill="rgba(255,255,255,0.8)" font-family="Montserrat,sans-serif">' + subtitle.toUpperCase() + '</text>'
    + '<rect x="64" y="22" width="16" height="28" rx="5" fill="url(#cg2)"/>'
    + '<rect x="12" y="62" width="20" height="9" rx="4.5" fill="url(#bg2)" opacity="0.85"/>'
    + '<line x1="22" y1="62" x2="22" y2="71" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>'
    + '<ellipse cx="56" cy="66" rx="9" ry="6.5" fill="url(#tg)" opacity="0.8"/>'
    + '<ellipse cx="78" cy="64" rx="7" ry="5" fill="url(#cg2)" opacity="0.8"/>'
    + '<ellipse cx="36" cy="74" rx="6" ry="4" fill="#ff9944" opacity="0.7"/>'
    + '</svg>';
}

// ── GENERATE FULL PAGE HTML FOR ONE USER ────────────────────────

function generateBoxHTML(u) {
  var css = [
    '*{margin:0;padding:0;box-sizing:border-box;}',
    "body{background:linear-gradient(135deg,#0d1b35 0%,#1a2a4a 100%);min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px 10px;font-family:'Montserrat',sans-serif;}",
    ".price-tag{font-family:'Cinzel',serif;font-size:22px;color:#c9a84c;letter-spacing:3px;margin-bottom:20px;text-shadow:0 0 20px rgba(201,168,76,0.4);}",
    '.box-wrap{display:flex;align-items:flex-start;gap:0;filter:drop-shadow(0 24px 60px rgba(0,0,0,0.8));}',
    '.flap{height:54px;background:linear-gradient(180deg,#002460,#003a8c);border:1px solid rgba(77,184,255,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:2px;}',
    '.panel{background:linear-gradient(170deg,#002d6b 0%,#0055b3 45%,#0066cc 75%,#002d6b 100%);border:1px solid rgba(77,184,255,0.2);position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;}',
    '.gstrip{background:linear-gradient(90deg,#a07830,#e0c060,#c9a84c,#e0c060,#a07830);width:100%;padding:3px 6px;text-align:center;font-size:6.5px;font-weight:700;letter-spacing:1.5px;color:#1a0a00;text-transform:uppercase;}',
    '.rxbadge{border:2px solid #c9a84c;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.07);}',
    '.wave{position:absolute;bottom:0;left:0;right:0;height:70px;opacity:0.2;pointer-events:none;}',
    '.dot{position:absolute;border-radius:50%;background:rgba(77,184,255,0.1);pointer-events:none;}',
    ".brand{font-family:'Playfair Display',serif;font-weight:900;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,0.4);}",
    ".subtitle{font-family:'Cinzel',serif;letter-spacing:3px;color:#c9a84c;text-transform:uppercase;}",
    '.ptype{font-size:7px;font-weight:600;color:#a0d4ff;letter-spacing:3px;text-transform:uppercase;text-align:center;}',
    '.shimmer{width:75%;height:1px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);margin:5px auto;}',
    '.qbadge{border:1.5px solid #c9a84c;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(255,255,255,0.07);}',
    '.ing-row{display:flex;justify-content:space-between;margin-bottom:2px;}',
    '.carea{width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(77,184,255,0.25);border-radius:3px;padding:5px;display:flex;flex-direction:column;align-items:center;}',
    '.pill-img{border:1px dashed rgba(77,184,255,0.3);border-radius:5px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:rgba(0,20,60,0.35);}'
  ].join('\n');

  var BU = u.brand.toUpperCase();
  var SU = u.subtitle.toUpperCase();

  var leftPanel =
    '<div style="display:flex;flex-direction:column;">'
    + '<div class="flap" style="width:105px;border-radius:6px 6px 0 0;">'
    +   '<div style="font-family:\'Cinzel\',serif;font-size:7px;color:#c9a84c;letter-spacing:2px;">' + BU + '</div>'
    +   '<div style="font-size:5.5px;color:#a0d4ff;letter-spacing:1.5px;">' + SU + '</div>'
    + '</div>'
    + '<div class="panel" style="width:105px;min-height:310px;padding:10px 6px 8px;border-radius:0 0 0 5px;">'
    +   '<div class="gstrip">' + u.gstrip + '</div>'
    +   '<div class="rxbadge" style="width:34px;height:34px;margin:8px auto 4px;"><span style="font-family:\'Cinzel\',serif;font-size:13px;color:#c9a84c;font-weight:700;">Rx</span></div>'
    +   '<div class="brand" style="font-size:12px;text-align:center;margin-bottom:2px;">' + u.brand + '</div>'
    +   '<div class="subtitle" style="font-size:5.5px;text-align:center;">' + u.subtitle + '</div>'
    +   '<div class="ptype" style="margin-top:3px;">' + u.ptype + '</div>'
    +   '<div class="shimmer"></div>'
    +   '<div class="pill-img" style="width:62px;height:62px;margin:4px auto;">' + pillSVGSmall() + '</div>'
    +   '<div class="carea" style="margin-top:auto;">'
    +     '<div style="font-size:5.5px;color:#88aabb;border:1px dashed rgba(77,184,255,0.3);padding:2px 5px;border-radius:2px;">COMPANY LOGO</div>'
    +     '<div style="font-family:\'Cinzel\',serif;font-size:6.5px;color:#c9a84c;margin-top:2px;letter-spacing:1px;">' + u.company + '</div>'
    +   '</div>'
    +   '<div class="dot" style="width:35px;height:35px;bottom:55px;left:-8px;"></div>'
    +   '<div class="wave"><svg viewBox="0 0 105 70" preserveAspectRatio="none" width="100%" height="100%"><path d="M0,30 Q26,10 52,30 Q79,50 105,30 L105,70 L0,70 Z" fill="#4db8ff"/></svg></div>'
    + '</div></div>';

  var frontPanel =
    '<div style="display:flex;flex-direction:column;">'
    + '<div class="flap" style="width:190px;">'
    +   '<div style="font-family:\'Cinzel\',serif;font-size:7.5px;color:#c9a84c;letter-spacing:2.5px;">' + BU + ' ' + SU + '</div>'
    +   '<div style="background:linear-gradient(90deg,#003a7d,#0077e6,#003a7d);border:1px solid rgba(77,184,255,0.4);border-radius:3px;padding:2px 10px;font-size:6px;font-weight:700;color:#c9a84c;letter-spacing:1.5px;">100% EFFECTIVE RESULT</div>'
    + '</div>'
    + '<div class="panel" style="width:190px;min-height:310px;padding:10px 8px 8px;">'
    +   '<div class="gstrip">' + u.gstrip + '</div>'
    +   '<div style="display:flex;align-items:center;gap:7px;width:100%;margin-top:9px;">'
    +     '<div class="rxbadge" style="width:40px;height:40px;flex-shrink:0;"><span style="font-family:\'Cinzel\',serif;font-size:15px;color:#c9a84c;font-weight:700;">Rx</span></div>'
    +     '<div><div class="brand" style="font-size:19px;">' + u.brand + '</div><div class="subtitle" style="font-size:6.5px;letter-spacing:2.5px;">' + u.subtitle + '</div></div>'
    +   '</div>'
    +   '<div class="ptype" style="margin-top:4px;">' + u.ptype + '</div>'
    +   '<div class="shimmer"></div>'
    +   '<div class="pill-img" style="width:100px;height:88px;margin:4px auto;">' + pillSVGLarge(u.brand, u.subtitle) + '</div>'
    +   '<div class="qbadge" style="width:48px;height:48px;margin:4px auto;">'
    +     '<div class="brand" style="font-size:18px;line-height:1;">' + u.qty + '</div>'
    +     '<div style="font-size:5.5px;color:#c9a84c;letter-spacing:1px;font-weight:700;">' + u.qtyunit + '</div>'
    +   '</div>'
    +   '<div class="gstrip" style="margin-top:auto;">' + u.gstrip + '</div>'
    +   '<div class="dot" style="width:50px;height:50px;top:-10px;right:-8px;"></div>'
    +   '<div class="dot" style="width:22px;height:22px;top:110px;left:3px;"></div>'
    +   '<div class="wave"><svg viewBox="0 0 190 70" preserveAspectRatio="none" width="100%" height="100%"><path d="M0,30 Q47,8 95,30 Q142,52 190,30 L190,70 L0,70 Z" fill="#4db8ff"/><path d="M0,48 Q47,28 95,48 Q142,68 190,48 L190,70 L0,70 Z" fill="#0066cc"/></svg></div>'
    + '</div></div>';

  var backPanel =
    '<div style="display:flex;flex-direction:column;">'
    + '<div class="flap" style="width:190px;">'
    +   '<div style="font-family:\'Cinzel\',serif;font-size:7px;color:#c9a84c;letter-spacing:2px;">INGREDIENTS &amp; INFO</div>'
    + '</div>'
    + '<div class="panel" style="width:190px;min-height:310px;padding:10px 8px 8px;">'
    +   '<div class="gstrip">' + u.gstrip + '</div>'
    +   '<div style="display:flex;align-items:center;gap:7px;width:100%;margin-top:8px;">'
    +     '<div class="rxbadge" style="width:32px;height:32px;flex-shrink:0;"><span style="font-family:\'Cinzel\',serif;font-size:12px;color:#c9a84c;font-weight:700;">Rx</span></div>'
    +     '<div><div class="brand" style="font-size:15px;">' + u.brand + '</div><div class="subtitle" style="font-size:6px;">' + u.subtitle + '</div></div>'
    +   '</div>'
    +   '<div class="ptype" style="margin-top:3px;">' + u.ptype + '</div>'
    +   '<div class="shimmer"></div>'
    +   '<div style="width:100%;margin-top:4px;">'
    +     '<div style="font-size:6.5px;font-weight:700;color:#c9a84c;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid rgba(77,184,255,0.3);padding-bottom:2px;margin-bottom:4px;">Ingredient per g — Contains</div>'
    +     '<div class="ing-row"><span style="font-size:6.5px;color:#d0eaff;">' + u.ing1n + '</span><span style="font-size:6.5px;color:#a0d4ff;font-weight:600;">' + u.ing1v + '</span></div>'
    +     '<div class="ing-row"><span style="font-size:6.5px;color:#d0eaff;">' + u.ing2n + '</span><span style="font-size:6.5px;color:#a0d4ff;font-weight:600;">' + u.ing2v + '</span></div>'
    +     '<div class="ing-row"><span style="font-size:6.5px;color:#d0eaff;">' + u.ing3n + '</span><span style="font-size:6.5px;color:#a0d4ff;font-weight:600;">' + u.ing3v + '</span></div>'
    +     '<div class="ing-row"><span style="font-size:6.5px;color:#d0eaff;">' + u.ing4n + '</span><span style="font-size:6.5px;color:#a0d4ff;font-weight:600;">' + u.ing4v + '</span></div>'
    +   '</div>'
    +   '<div style="font-size:6px;color:#88bbdd;text-align:center;margin-top:6px;line-height:1.7;font-style:italic;">Store in a cool &amp; dry place<br>Keep out of reach of children</div>'
    +   '<div class="qbadge" style="width:42px;height:42px;margin:5px auto;">'
    +     '<div class="brand" style="font-size:15px;line-height:1;">' + u.qty + '</div>'
    +     '<div style="font-size:5px;color:#c9a84c;letter-spacing:1px;font-weight:700;">' + u.qtyunit + '</div>'
    +   '</div>'
    +   '<div class="carea" style="margin-top:auto;">'
    +     '<div style="font-size:5.5px;color:#88aabb;border:1px dashed rgba(77,184,255,0.3);padding:2px 8px;border-radius:2px;">COMPANY LOGO</div>'
    +     '<div style="font-family:\'Cinzel\',serif;font-size:7px;color:#c9a84c;margin-top:2px;letter-spacing:1px;">' + u.company + '</div>'
    +     '<div style="font-size:5.5px;color:#88bbdd;text-align:center;line-height:1.5;margin-top:1px;">' + u.address + '</div>'
    +   '</div>'
    +   '<div class="wave"><svg viewBox="0 0 190 70" preserveAspectRatio="none" width="100%" height="100%"><path d="M0,30 Q47,8 95,30 Q142,52 190,30 L190,70 L0,70 Z" fill="#4db8ff"/><path d="M0,48 Q47,28 95,48 Q142,68 190,48 L190,70 L0,70 Z" fill="#0066cc"/></svg></div>'
    + '</div></div>';

  var rightPanel =
    '<div style="display:flex;flex-direction:column;">'
    + '<div class="flap" style="width:105px;border-radius:6px 6px 0 0;">'
    +   '<div style="font-family:\'Cinzel\',serif;font-size:7px;color:#c9a84c;letter-spacing:2px;">' + BU + '</div>'
    +   '<div style="font-size:5.5px;color:#a0d4ff;letter-spacing:1.5px;">' + SU + '</div>'
    + '</div>'
    + '<div class="panel" style="width:105px;min-height:310px;padding:10px 6px 8px;border-radius:0 0 5px 0;">'
    +   '<div class="gstrip">' + u.gstrip + '</div>'
    +   '<div class="brand" style="font-size:12px;text-align:center;margin-top:8px;">' + u.brand + '</div>'
    +   '<div class="subtitle" style="font-size:5.5px;text-align:center;">' + u.subtitle + '</div>'
    +   '<div class="ptype" style="margin-top:3px;">' + u.ptype + '</div>'
    +   '<div class="shimmer"></div>'
    +   '<div style="font-size:6px;color:#d0eaff;line-height:1.9;width:100%;margin-top:2px;">'
    +     '<span style="color:#c9a84c;font-weight:700;">Mfg. Lic. No.:</span> ' + u.mfglic + '<br>'
    +     '<span style="color:#c9a84c;font-weight:700;">Batch No.:</span> ' + u.batch + '<br>'
    +     '<span style="color:#c9a84c;font-weight:700;">Mfg. Date:</span> ' + u.mfgdate + '<br>'
    +     '<span style="color:#c9a84c;font-weight:700;">Exp. Date:</span> ' + u.expdate + '<br>'
    +     '<span style="color:#c9a84c;font-weight:700;">MRP Rs.:</span> ' + u.mrp + '<br>'
    +     '<span style="font-size:5.5px;color:#88bbdd;">Incl. all taxes</span>'
    +   '</div>'
    +   '<div class="shimmer"></div>'
    +   '<div style="font-size:6px;color:#c9a84c;font-weight:700;letter-spacing:1px;text-align:center;margin-bottom:2px;">MARKETED BY</div>'
    +   '<div style="font-family:\'Cinzel\',serif;font-size:6.5px;color:#c9a84c;text-align:center;">' + u.company + '</div>'
    +   '<div style="font-size:5.5px;color:#88bbdd;text-align:center;line-height:1.5;margin-top:1px;">' + u.address + '</div>'
    +   '<div style="font-size:6px;color:#c9a84c;font-weight:700;letter-spacing:1px;text-align:center;margin:4px 0 2px;">MANUFACTURED BY</div>'
    +   '<div style="font-family:\'Cinzel\',serif;font-size:6.5px;color:#c9a84c;text-align:center;">' + u.company + '</div>'
    +   '<div style="font-size:5.5px;color:#88bbdd;text-align:center;line-height:1.5;margin-top:1px;">' + u.address + '</div>'
    +   '<div class="dot" style="width:30px;height:30px;bottom:40px;right:-8px;"></div>'
    +   '<div class="wave"><svg viewBox="0 0 105 70" preserveAspectRatio="none" width="100%" height="100%"><path d="M0,30 Q26,10 52,30 Q79,50 105,30 L105,70 L0,70 Z" fill="#4db8ff"/></svg></div>'
    + '</div></div>';

  return '<!DOCTYPE html><html lang="en"><head>'
    + '<meta charset="UTF-8">'
    + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    + '<title>' + u.brand + ' ' + u.subtitle + ' — MRP Rs.' + u.mrp + '</title>'
    + '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@300;400;600;700&family=Cinzel:wght@700&display=swap" rel="stylesheet">'
    + '<style>' + css + '</style>'
    + '</head><body>'
    + '<div class="price-tag">MRP Rs. ' + u.mrp + ' &nbsp;|&nbsp; ' + u.brand + ' ' + u.subtitle + '</div>'
    + '<div class="box-wrap">' + leftPanel + frontPanel + backPanel + rightPanel + '</div>'
    + '</body></html>';
}

// ── OPEN ALL TABS ────────────────────────────────────────────────

function openAllTabs() {
  for (var i = 0; i < users.length; i++) {
    var html   = generateBoxHTML(users[i]);
    var newTab = window.open('', '_blank');
    if (newTab) {
      newTab.document.open();
      newTab.document.write(html);
      newTab.document.close();
    }
  }
}
