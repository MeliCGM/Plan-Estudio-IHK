/**
 * _korrekturEngine — Motor de corrección offline para ejercicios de escritura en alemán IHK
 * Uso: _korrekturEngine(texto, arrayFachbegriffe, divSalida)
 */
function _korrekturEngine(text, fach, box) {

  // ── 1. Estadísticas ──────────────────────────────────────
  const words    = text.split(/\s+/).filter(w => w.length > 0);
  const sents    = text.split(/(?<=[.!?])\s+|(?<=[.!?])$/).filter(s => s.trim().length > 1);
  const wc       = words.length;
  const sc       = sents.length;
  const avgLen   = sc > 0 ? Math.round(wc / sc) : 0;

  // ── 2. Informalidad → sugerencias formales ───────────────
  const informal = [
    { r:/\bich\b/ig,
      hint:'«<b>Ich</b>» al inicio de oración → en alemán técnico/IHK se prefiere la voz pasiva o construcciones impersonales. Ej: «Die Spannung <em>wird gemessen</em>» en lugar de «<em>Ich messe</em> die Spannung».' },
    { r:/\bman\b/ig,
      hint:'«<b>man</b>» → mejor usar Passiv: «<em>…wird durchgeführt</em>» en lugar de «<em>man führt … durch</em>».' },
    { r:/\bund dann\b/ig,
      hint:'«<b>und dann</b>» → informal. Alternativas formales: <em>anschließend, danach, daraufhin, im nächsten Schritt</em>.' },
    { r:/\bund auch\b/ig,
      hint:'«<b>und auch</b>» → preferir <em>sowie, darüber hinaus, zudem, außerdem</em>.' },
    { r:/\betc\b\.?|\busw\b\.?/ig,
      hint:'«<b>etc./usw.</b>» → en texto formal: escribe todos los puntos o usa <em>«unter anderem (u. a.)»</em>.' },
    { r:/\bhalt\b/ig,
      hint:'Partícula coloquial «<b>halt</b>» → eliminar en texto formal.' },
    { r:/\beigentlich\b/ig,
      hint:'«<b>eigentlich</b>» → coloquial. Sustituir por <em>«grundsätzlich», «im Wesentlichen», «prinzipiell»</em>.' },
    { r:/\bviele?\b/ig,
      hint:'«<b>viel/viele</b>» → más preciso en IHK: <em>«zahlreiche», «umfangreiche», «verschiedene»</em>.' },
    { r:/\b(?:macht|machen)\b/ig,
      hint:'«<b>machen</b>» → verbo comodín; sustituir por: <em>ermöglichen, gewährleisten, umfassen, durchführen, erzielen, einsetzen</em>.' },
    { r:/\b(?:sehr gut|super|toll|klasse)\b/ig,
      hint:'«<b>sehr gut/super/toll</b>» → registro informal. Usar <em>«präzise», «effizient», «zuverlässig», «hochwertig»</em>.' },
    { r:/\bkriegen\b/ig,
      hint:'«<b>kriegen</b>» → coloquial. Usar <em>«erhalten», «bekommen», «erzielen»</em>.' },
    { r:/^(?:Aber|Weil|Denn|Oder) /im,
      hint:'Oración que comienza con «<b>Aber/Weil/Denn/Oder</b>» → esas conjunciones no inician oración en alemán formal. Reformular: <em>«Allerdings…», «Da…», «Denn (con V2)», «Beziehungsweise…»</em>.' },
    { r:/\bist wichtig\b/ig,
      hint:'«<b>ist wichtig</b>» → vago. Preferir: <em>«spielt eine entscheidende Rolle», «ist von großer Bedeutung», «ist essenziell für»</em>.' },
  ];

  // ── 3. Errores gramaticales frecuentes ──────────────────
  const gram = [];

  if (/[a-zäöüß][.!?] [a-záöüßéàèê]/u.test(text))
    gram.push('Inicio de oración sin mayúscula: en alemán los sustantivos <em>y</em> el comienzo de oración llevan mayúscula.');

  if (/  /.test(text))
    gram.push('Espacios dobles detectados — revisar y corregir.');

  if (/,[^ \d"»\)]/.test(text))
    gram.push('Coma sin espacio después: «,palabra» → «, palabra».');

  if (/\bdas (?:ich|er|sie|wir|man)\b/i.test(text))
    gram.push('Posible confusión «<b>das</b>» / «<b>dass</b>»: si introduce oración subordinada debe ser <em>«dass»</em> (con doble s). Ej: «Er sagt, <em>dass</em> die Spannung…»');

  if (/\bae\b|\boe\b|\bue\b/i.test(text))
    gram.push('¿Umlauts sustituidos? Verificar si «ae/oe/ue» debería ser «ä/ö/ü».');

  if (wc > 0 && sc > 0 && avgLen > 28)
    gram.push(`Frases muy largas (promedio ${avgLen} palabras/oración). Para mayor claridad en IHK, intenta ≤ 20 palabras por oración.`);

  if (sc > 2) {
    const starts = sents.map(s => s.trim().split(/\s/)[0]?.toLowerCase()).filter(Boolean);
    const rep = starts.filter((v, i) => starts.indexOf(v) !== i && v.length > 2);
    if (rep.length)
      gram.push(`Inicio de oración repetido con «<b>${[...new Set(rep)].join(', ')}</b>» → variar con conectores: <em>Darüber hinaus, Zudem, Außerdem, Ergänzend, Dabei, Insbesondere</em>.`);
  }

  // Verbos en posición incorrecta en Nebensatz (simple heurística)
  if (/\bweil [a-zäöü]+\s+[a-zäöü]+\s+(?:ist|sind|hat|haben|wird|werden)\b/i.test(text) === false
      && /\bweil\b/i.test(text))
    gram.push('Recuerda: con «<b>weil</b>» el verbo va AL FINAL de la oración. Ej: «…weil die Spannung <em>steigt</em>» (no «weil steigt die Spannung»).');

  // ── 4. Conectores formales ───────────────────────────────
  const connectors = ['darüber hinaus','zudem','außerdem','jedoch','allerdings','einerseits',
    'andererseits','dabei','insbesondere','im rahmen','abschließend','ferner','des weiteren',
    'infolgedessen','dementsprechend','unter anderem'];
  const usedConn = connectors.filter(c => new RegExp(c, 'i').test(text));

  // ── 5. Construcción del HTML ─────────────────────────────
  let html = '<div style="border:2px solid #1a56db;border-radius:10px;overflow:hidden;margin-top:4px">';
  html += '<div style="background:#1a56db;color:white;padding:8px 14px;font-weight:700;font-size:.9rem">✏ Korrektur &amp; Feedback</div>';
  html += '<div style="padding:14px;display:flex;flex-direction:column;gap:12px">';

  // Estadísticas
  const statColor = wc < 30 ? '#d97706' : '#0e9f6e';
  const statNote  = wc < 30 ? ' — zu kurz (Ziel: 40+ Wörter)' : wc > 150 ? ' — sehr ausführlich ✓' : ' — angemessene Länge ✓';
  html += `<div style="background:#f0f9ff;border-radius:8px;padding:10px;font-size:.82rem">
    <b>📊 Statistik:</b> ${wc} Wörter · ${sc} ${sc === 1 ? 'Satz' : 'Sätze'} · ⌀ ${avgLen} Wörter/Satz
    <span style="color:${statColor}">${statNote}</span>
  </div>`;

  // Fachbegriffe
  let fachScore = 0;
  html += '<div style="background:#f0fdf4;border-radius:8px;padding:10px"><b>🔑 Fachbegriffe:</b>';
  html += '<div style="margin-top:6px;display:grid;grid-template-columns:1fr 1fr;gap:3px 8px">';
  fach.forEach(f => {
    const found = f.r.test(text);
    if (found) fachScore++;
    html += `<div style="font-size:.79rem">${found
      ? '<span style="color:#0e9f6e">✅ '
      : '<span style="color:#dc2626">❌ '}${f.label}</span></div>`;
  });
  html += '</div>';
  const fachPct = Math.round(fachScore / fach.length * 100);
  html += `<div style="margin-top:6px;font-size:.8rem;color:${fachScore >= Math.ceil(fach.length * 0.6) ? '#0e9f6e' : '#d97706'}">
    ${fachScore}/${fach.length} Fachbegriffe verwendet (${fachPct}%)${fachScore < Math.ceil(fach.length * 0.6) ? ' — versuche mehr einzubauen' : ' ✓'}
  </div></div>`;

  // Informalidad
  const infFound = informal.filter(i => i.r.test(text));
  if (infFound.length) {
    html += '<div style="background:#fffbeb;border-radius:8px;padding:10px"><b>⚠ Stil &amp; Formalität — Verbesserungsvorschläge:</b>';
    html += '<ul style="margin:6px 0 0 16px;font-size:.81rem;display:flex;flex-direction:column;gap:5px">';
    infFound.forEach(i => html += `<li>${i.hint}</li>`);
    html += '</ul></div>';
  } else {
    html += '<div style="background:#f0fdf4;border-radius:8px;padding:8px;font-size:.82rem;color:#065f46">✅ <b>Stil:</b> Kein umgangssprachlicher Ausdruck gefunden.</div>';
  }

  // Gramática
  if (gram.length) {
    html += '<div style="background:#fff1f2;border-radius:8px;padding:10px"><b>📝 Grammatik &amp; Rechtschreibung:</b>';
    html += '<ul style="margin:6px 0 0 16px;font-size:.81rem;display:flex;flex-direction:column;gap:5px">';
    gram.forEach(g => html += `<li>${g}</li>`);
    html += '</ul></div>';
  } else {
    html += '<div style="background:#f0fdf4;border-radius:8px;padding:8px;font-size:.82rem;color:#065f46">✅ <b>Grammatik:</b> Keine offensichtlichen Fehler gefunden.</div>';
  }

  // Conectores
  if (usedConn.length) {
    html += `<div style="background:#f0fdf4;border-radius:8px;padding:8px;font-size:.82rem;color:#065f46">
      ✅ <b>Konnektoren:</b> Gut eingesetzt: <em>${usedConn.join(', ')}</em></div>`;
  } else if (sc > 1) {
    html += '<div style="background:#f0f9ff;border-radius:8px;padding:8px;font-size:.82rem;color:#1e429f">';
    html += '💡 <b>Tipp:</b> Füge formale Konnektoren ein: <em>darüber hinaus, zudem, außerdem, im Rahmen von, insbesondere, dabei, des Weiteren</em></div>';
  }

  // Puntuación global
  const p1 = Math.round(fachPct * 0.5);                        // 50 pts por Fachbegriffe
  const p2 = Math.max(0, 25 - infFound.length * 6);            // 25 pts por estilo
  const p3 = Math.max(0, 15 - gram.length * 5);                // 15 pts por gramática
  const p4 = Math.min(10, usedConn.length * 4);                // 10 pts por conectores
  const total = Math.min(100, p1 + p2 + p3 + p4);

  const [icon, label, color] =
    total >= 80 ? ['🟢', 'Sehr gut — IHK-tauglich!', '#0e9f6e']
    : total >= 60 ? ['🟡', 'Gut — kleine Verbesserungen nötig', '#d97706']
    : ['🔴', 'Noch üben — Musterlösung zum Vergleich nutzen', '#dc2626'];

  html += `<div style="background:${color}22;border:2px solid ${color};border-radius:8px;padding:10px;text-align:center;font-weight:700;font-size:.9rem">
    ${icon} ${total}/100 Punkte — ${label}
  </div>`;

  html += '</div></div>';
  box.innerHTML = html;
  box.style.display = 'block';
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
