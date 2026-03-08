/* ══════════════════════════════════════════
   Interview Study - Common JS
   ══════════════════════════════════════════ */

// ── Accordion Toggle ──
document.addEventListener('click', function(e) {
  const q = e.target.closest('.qa-q');
  if (!q) return;
  const card = q.closest('.qa-card');
  card.classList.toggle('open');
});

// ── Tab Switching ──
function switchTab(tabId, btn) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(function(el) {
    el.classList.remove('active');
  });
  // Deactivate all tab buttons
  document.querySelectorAll('.tab-btn').forEach(function(el) {
    el.classList.remove('active');
  });
  // Show selected tab
  var target = document.getElementById(tabId);
  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
}

// ── Expand All / Collapse All ──
function toggleAll(expand) {
  document.querySelectorAll('.qa-card').forEach(function(card) {
    if (expand) {
      card.classList.add('open');
    } else {
      card.classList.remove('open');
    }
  });
}

// ── Search within page ──
function searchQA(query) {
  var q = query.toLowerCase().trim();
  document.querySelectorAll('.qa-card').forEach(function(card) {
    var text = card.textContent.toLowerCase();
    if (!q || text.includes(q)) {
      card.style.display = '';
      if (q) card.classList.add('open');
    } else {
      card.style.display = 'none';
    }
  });
}
