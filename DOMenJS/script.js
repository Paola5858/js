// ===================== TABS =====================
function showTab(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// ===================== UTILS =====================
function flash(el) {
  el.classList.remove('highlight-flash');
  void el.offsetWidth;
  el.classList.add('highlight-flash');
}

function log(id, msg) {
  document.getElementById(id).textContent = msg;
}