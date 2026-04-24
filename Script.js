// ── MODAL OPEN / CLOSE ──────────────────────────────────────────

function openModal() {
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

// Close modal when clicking outside the modal box
document.getElementById('modalOverlay').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// ── HELPERS ─────────────────────────────────────────────────────

// Get trimmed value from an input field
function val(id) {
  return document.getElementById(id).value.trim();
}

// Set the text content of an element by id
function setText(id, text) {
  var el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ── APPLY CHANGES ────────────────────────────────────────────────

function applyChanges() {

  // Read all input values
  var brand    = val('f_brand');
  var subtitle = val('f_subtitle');
  var ptype    = val('f_ptype');
  var qty      = val('f_qty');
  var qtyunit  = val('f_qtyunit');
  var gstrip   = val('f_gstrip');
  var company  = val('f_company');
  var address  = val('f_address');
  var mfglic   = val('f_mfglic');
  var batch    = val('f_batch');
  var mfgdate  = val('f_mfgdate');
  var expdate  = val('f_expdate');
  var mrp      = val('f_mrp');
  var ing1n    = val('f_ing1n');
  var ing1v    = val('f_ing1v');
  var ing2n    = val('f_ing2n');
  var ing2v    = val('f_ing2v');
  var ing3n    = val('f_ing3n');
  var ing3v    = val('f_ing3v');
  var ing4n    = val('f_ing4n');
  var ing4v    = val('f_ing4v');

  // ── LEFT SIDE PANEL ──
  setText('lf_brand',     brand.toUpperCase());
  setText('lf_sub',       subtitle.toUpperCase());
  setText('lf_brandname', brand);
  setText('lf_subtitle',  subtitle);
  setText('lf_ptype',     ptype);
  setText('lf_gstrip',    gstrip);
  setText('lf_company',   company);

  // ── FRONT PANEL ──
  setText('fr_flap',      brand.toUpperCase() + ' ' + subtitle.toUpperCase());
  setText('fr_gstrip',    gstrip);
  setText('fr_gstrip2',   gstrip);
  setText('fr_brand',     brand);
  setText('fr_subtitle',  subtitle);
  setText('fr_ptype',     ptype);
  setText('fr_qty',       qty);
  setText('fr_qtyunit',   qtyunit);
  setText('svg_brand1',   brand.toUpperCase());   // SVG text inside pill image
  setText('svg_sub1',     subtitle.toUpperCase()); // SVG text inside pill image

  // ── BACK / INGREDIENTS PANEL ──
  setText('bk_gstrip',    gstrip);
  setText('bk_brand',     brand);
  setText('bk_subtitle',  subtitle);
  setText('bk_ptype',     ptype);
  setText('bk_qty',       qty);
  setText('bk_qtyunit',   qtyunit);
  setText('bk_company',   company);
  setText('bk_address',   address);
  setText('bk_ing1n',     ing1n);
  setText('bk_ing1v',     ing1v);
  setText('bk_ing2n',     ing2n);
  setText('bk_ing2v',     ing2v);
  setText('bk_ing3n',     ing3n);
  setText('bk_ing3v',     ing3v);
  setText('bk_ing4n',     ing4n);
  setText('bk_ing4v',     ing4v);

  // ── RIGHT SIDE PANEL ──
  setText('rt_brand',     brand.toUpperCase());
  setText('rt_sub',       subtitle.toUpperCase());
  setText('rt_brandname', brand);
  setText('rt_subtitle',  subtitle);
  setText('rt_ptype',     ptype);
  setText('rt_gstrip',    gstrip);
  setText('rt_mfglic',    mfglic);
  setText('rt_batch',     batch);
  setText('rt_mfgdate',   mfgdate);
  setText('rt_expdate',   expdate);
  setText('rt_mrp',       mrp);
  setText('rt_marketed',  company);
  setText('rt_mktaddr',   address);
  setText('rt_mfg',       company);
  setText('rt_mfgaddr',   address);

  closeModal();
}
