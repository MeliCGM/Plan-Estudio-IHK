# Pensum IHK Mikrotechnologe — Dresden Chip Academy
**Basado en:** Angebot 2026-016/019 (SBH Nordost) + KMK Rahmenlehrplan (1998/2018)
**Umschulung:** 01.08.2026 – Juli 2028 (24 meses, incl. 25 semanas Praktikum)
**Preparación autónoma:** 18 marzo – 31 julio 2026 (~19 semanas)

---

## Mapa completo: TQ → Lernfelder KMK

| TQ (Dresden Chip Academy) | Lernfeld KMK | Tema | Horas KMK | Umschulung-Jahr |
|--------------------------|-------------|------|-----------|-----------------|
| **TQ 1** — Grundlagen + Reinraum | LF 1 | Elektrische Grundgrößen + Signalverarbeitung | 80 h | Jahr 1 |
| | LF 2 | Chemische Zusammenhänge für Halbleiterherstellung | 80 h | Jahr 1 |
| | LF 3 | Funktionsanalyse ausgewählter Halbleiterwerkstoffe | 40 h | Jahr 1 |
| | LF 4 | Einhaltung von Reinraumbedingungen | 20 h | Jahr 1 |
| | LF 5 | Anwendung von Standardsoftware (Office, Dokumentation) | 60 h | Jahr 1 |
| **TQ 2** — Prozesse | LF 6 | Diskrete und integrierte Schaltungen | 140 h | Jahr 1–2 |
| | LF 7 | Anwendung fototechnischer Verfahren (Lithografie) | 60 h | Jahr 1–2 |
| | LF 8 | Erstellung von Schichten und deren Strukturierung (Ätzprozesse) | 80 h | Jahr 1–2 |
| **TQ 3** — Schichttechnologien | LF 8 | (cont.) CVD, PVD, ALD + Vakuum + Messtechnik | — | Jahr 1–2 |
| | LF 9 | Veränderung der Leitfähigkeit durch Dotierungsverfahren | 40 h | Jahr 2 |
| **TQ 4** — Mikrosystemtechnik | LF 12 | Beschreibung von Mikrosystemen | 60 h | Jahr 2 |
| | LF 13 | Einstellung, Prüfung und Optimierung verfahrenstechnischer Anlagen | 60 h | Jahr 2 |
| **TQ 5** — Instandhaltung | LF 11 | Einhaltung von Qualitätsstandards (SPC, QM) | 40 h | Jahr 2 |
| | LF 13 | (cont.) Regelungs- und Prozessleittechnik | — | Jahr 2 |
| **TQ 6** — Prozessintegration | LF 10 | Fertigstellung mikrotechnischer Produkte (Backend) | 80 h | Jahr 2 |
| | LF 13 | (cont.) Prozessketten, Automatisierung | — | Jahr 2 |

> **Nota:** El Rahmenlehrplan KMK está diseñado para 3 años de Ausbildung (280h/año).
> El Umschulung Dresden Chip Academy comprime esto a **2 años (420h/año efectivas)**.
> El contenido es idéntico, pero el ritmo es más intensivo.

**Total KMK:** 840 horas de teoría (420h/año × 2 años Umschulung) + práctica en FAB

---

## Contenido detallado por Lernfeld

### FASE 1 — Jahr 1 Umschulung (TQ 1): Fundamentos
*(TQ 1: ago 2026 – apr 2027 aprox. | corresponde a período de estudio autónomo + inicio Umschulung)*

**LF 1 — Elektrische Grundgrößen** (80 h)
- Magnitudes eléctricas: U, I, R, P; ley de Ohm, leyes de Kirchhoff
- Señales analógicas y digitales
- Medición de magnitudes eléctricas (multímetro, osciloscopio)
- Componentes pasivos: R, L, C en DC y AC
- Normas de seguridad eléctrica (VDE)
- **Fuente**: Boylestad cap 1-5

**LF 2 — Chemische Zusammenhänge** (80 h)
- Gefahrstoffverordnung: manejo, etiquetado, eliminación de residuos
- Tabla periódica, sistemas ácido-base, pH
- Compuestos de carbono, alcoholes, solventes
- Gases reactivos y productos de descomposición (SiH4, HCl, HF)
- Obtención de agua ultrapura (DI water)
- **Fuente**: Safety guides (HF, Silane) + background PhD (¡ventaja directa!)

**LF 3 — Halbleiterwerkstoffe** (40 h)
- Mecanismos de conducción: metales, semiconductores, aislantes
- Si monocristalino y policristalino: estructura cristalina, defectos
- Dopaje N y P: efecto sobre conductividad
- Unión p-n: curva I-V, zona de deplexión
- **Fuente**: Sze cap 1-2; módulo ya creado en Plan_Estudio_IHK/01_Fundamentos/

**LF 4 — Reinraumbedingungen** (20 h)
- Clasificación ISO 14644 (ISO 1–9)
- Fuentes de contaminación: partículas, humanos, equipos
- Medición de partículas
- Ventilación: flujo laminar (TAV), HEPA/ULPA
- Indumentaria y protocolos de entrada al cleanroom
- **Fuente**: VDI_2083_Cleanroom_Standards_Summary.md

**LF 5 — Standardsoftware** (60 h)
- Office: Word, Excel (documentación de procesos, gráficas SPC básicas)
- Fundamentos de sistema operativo Windows
- Conceptos de respaldo de datos
- Instrucciones técnicas en alemán e inglés
- *Nota: nivel de tu expertise académico → tema fácil, baja prioridad de estudio*

---

### FASE 2 — Jahr 1–2 Umschulung (TQ 2 + TQ 3): Procesos y Capas
*(TQ 2+3: feb 2027 – dic 2027 aprox.)*

**LF 6 — Diskrete und integrierte Schaltungen** (140 h) ← TEMA EXTENSO
- Componentes activos y pasivos: diodos, BJT, MOSFET
- Técnica bipolar y unipolar
- Circuitos amplificadores básicos
- Lógica digital: puertas, flip-flops, memoria
- Medición de wafers: estructuras de test, parámetros eléctricos
- ESD y EMI: sensibilidad de dispositivos
- **Fuente**: Boylestad completo + Sze cap 3-4

**LF 7 — Fototechnische Verfahren / Lithografie** (60 h)
- Fotoresist: propiedades físicas y químicas, positivo vs. negativo
- Proceso completo: coating → soft-bake → exposure → PEB → development → hard-bake
- Sistemas de exposición: contacto, proximidad, proyección (ASML TWINSCAN)
- DUV (193 nm) vs EUV (13.5 nm)
- Técnicas de inspección y defectos típicos
- Gefahrstoffe: solventes de resist
- **Fuente**: Photolithography_Process_Guide.md + May & Spanos cap 2

**LF 8 — Schichten und Strukturierung** (80 h)
- Crecimiento de óxidos: SiO2 térmico (Deal-Grove model)
- Nitridos (Si3N4), capas de polisiliicio, metales, epitaxia
- CVD: LPCVD, PECVD, APCVD — reacciones, precursores, parámetros
- PVD: sputtering y evaporación
- ALD: reacciones autolimitantes de superficie
- Estructuración por nasschemisches Ätzen (HF, KOH, H3PO4) y Trockenätzen (RIE, plasma)
- Influencia del vacío en los procesos
- **Fuente**: May & Spanos cap 3-4+6; Wolf VLSI vol1; Leybold (vacío)

---

### FASE 3 — Jahr 2 Umschulung (TQ 4 + TQ 5 + TQ 6): Integración y Calidad
*(TQ 4+5+6: nov 2027 – jul 2028 aprox. | incluye 25 semanas Betriebspraktikum)*

**LF 9 — Dotierungsverfahren** (40 h)
- Dopantes: propiedades, coeficiente de difusión, solubilidad
- Difusión: ley de Fick, hornos de difusión
- Implantación iónica: energía, dosis, distribución
- Recocido (Annealing): activación eléctrica
- **Fuente**: Wolf VLSI vol1 + May & Spanos cap 5

**LF 10 — Fertigstellung / Backend** (80 h)
- Procesos de cara posterior (backside)
- Dicing (corte de wafer)
- Chipmontage y Bestückung
- Wire bonding y contactización
- Packaging (Häusen)
- Prueba funcional final
- **Fuente**: May & Spanos cap 7-8

**LF 11 — Qualitätsstandards / SPC** (40 h)
- Fundamentos de QM: ISO 9001, criterios de calidad
- Estadística: distribución normal, media, desviación estándar
- Control estadístico de procesos (SPC): cartas de control Shewhart
- Cp, Cpk: índices de capacidad de proceso
- Análisis de defectos y causas raíz
- **Fuente**: May & Spanos cap 9

**LF 12 — Mikrosysteme (MEMS)** (60 h)
- Sensores: temperatura, presión, aceleración, flujo
- Actuadores (micromotor)
- Principios de fabricación MEMS
- Aplicaciones: airbag, inkjet, biochips
- Interfaces con entorno macroscópico
- **Fuente**: bibliografía adicional (a buscar)

**LF 13 — Verfahrenstechnische Anlagen** (60 h)
- Controles: Ablaufsteuerung, PID, regulación
- Sensores de proceso: temperatura, presión, flujo, pH
- Transmisión analógica y digital de datos de medición
- PC-gestützte Steuer- und Regelungstechnik
- Fließbilder, protocolos de medición, diagnóstico de fallos
- **Fuente**: conocimiento de la academia + documentación de equipos

---

## Plan de tiempo: Preparación autónoma (Mar–Jul 2026)

**Disponible:** 1–3 h/día · promedio realista: 1.5 h/día × 5 días = **~7.5 h/semana**
**Total estimado en 19 semanas:** ~140 horas de estudio
**Meta:** llegar a TQ1 con LF1-4 dominados y LF7-8 como vista previa

### FASE 0 — Orientación (sem. 1-2: 18-31 mar 2026) ~15h
*Objetivo: entender el mapa completo, activar conocimiento de química*

| Sesión | Tema | Duración | Recurso |
|--------|------|----------|---------|
| 1 | Leer este pensum + CLAUDE.md | 45 min | este archivo |
| 2 | Leer Rahmenlehrplan KMK completo (en DE) | 60 min | `IHK_Prüfungsvorbereitung\Rahmenlehrplan_Mikrotechnologe_KMK_OFICIAL.pdf` |
| 3 | Visión general FAB: flujo de proceso wafer to chip | 45 min | May & Spanos cap 1 |
| 4 | `/sem-de` — vocabulario: los 13 Lernfelder en DE | 30 min | agente |
| 5 | `/sem-fichas` — Lernfelder IHK: nombre + contenido | 45 min | agente |
| 6-8 | Repaso: silicio, p-n junction, band gap (desde química) | 3×45 min | Sze cap 1 + módulo LF3 ya creado |

---

### FASE 1 — Elektrotechnik (sem. 3-6: 1-30 abr 2026) ~30h
*Objetivo: dominar LF1 (el más alejado de tu background)*
*Criterio éxito: calcular circuitos RC, leer osciloscopio, ley de Ohm aplicada a FAB*

| Semana | Sesiones | Tema | Recurso |
|--------|----------|------|---------|
| 3 | 3×45 min | U, I, R: ley de Ohm, potencia, simbología | Boylestad cap 1-2 |
| 4 | 3×45 min | Kirchhoff, divisores de tensión/corriente, circuitos mixtos | Boylestad cap 3-4 |
| 5 | 2×45 min + 1×30 min | Componentes pasivos: C y L, circuitos AC, filtros RC | Boylestad cap 10-11 |
| 6 | 2×45 min HTML | `/sem-html LF1 Elektrotechnik` + quiz autoevaluación | agente |
|   | 1×30 min DE | `/sem-de` vocabulario eléctrico IHK (20 términos) | agente |

---

### FASE 2 — Química + Reinraum (sem. 7-9: 1-21 may 2026) ~22h
*Objetivo: dominar LF2 y LF4 — ventaja directa de tu PhD*
*Criterio éxito: explicar en DE manejo de HF, clasificar cleanroom por ISO*

| Semana | Sesiones | Tema | Recurso |
|--------|----------|------|---------|
| 7 | 3×45 min | LF2: Gefahrstoffe — HF, Silane, solventes de resist; Gefahrstoffverordnung | Safety guides locales |
| 8 | 3×45 min | LF2: Chemie FAB — ácidos, bases, pH, agua DI, RCA clean | background propio + May & Spanos |
| 9 | 2×45 min | LF4: Reinraum ISO 14644, VDI 2083, protocolo entrada cleanroom | VDI_2083_Cleanroom_Standards_Summary.md |
|   | 1×45 min | `/sem-fichas LF2+LF4 — Gefahrstoffe + Reinraum` | agente |
|   | 1×30 min DE | `/sem-de ejercicio` — escribir en DE sobre Gefahrstoffe | agente |

---

### FASE 3 — Litografía + Capas (sem. 10-14: 22 may - 20 jun 2026) ~37h
*Objetivo: vista previa sólida de LF7 y LF8 (core del TQ2+TQ3)*
*Criterio éxito: describir en DE el proceso litográfico paso a paso*

| Semana | Sesiones | Tema | Recurso |
|--------|----------|------|---------|
| 10 | 3×45 min | LF7: Fotoresist — química, positivo/negativo, spin coating | May & Spanos cap 2 p.1-30 |
| 11 | 3×45 min | LF7: Exposure y development — sistemas ópticos, DUV, defectos | Photolithography_Process_Guide.md |
| 12 | 2×45 min | LF8: Oxidación SiO2 — Deal-Grove model, usos en FAB | May & Spanos cap 3 + Wolf vol1 |
|    | 1×45 min | `/sem-html LF7 Lithografie — página interactiva completa` | agente |
| 13 | 3×45 min | LF8: CVD/PECVD/LPCVD — comparación con síntesis orgánica | May & Spanos cap 4 |
| 14 | 2×45 min | LF8: Ätzen — nass (HF, KOH) vs trocken (RIE, plasma) | May & Spanos cap 6 |
|    | 1×30 min DE | `/sem-de` vocabulario Lithografie + Ätzprozesse (25 términos) | agente |

---

### FASE 4 — Dispositivos + Repaso (sem. 15-18: 21 jun - 19 jul 2026) ~30h
*Objetivo: base de LF6 (diodos, BJT, MOSFET) + consolidar todo*
*Criterio éxito: explicar funcionamiento MOSFET; autoevaluar LF1-4 y LF7-8*

| Semana | Sesiones | Tema | Recurso |
|--------|----------|------|---------|
| 15 | 3×45 min | LF6: Diodos — p-n junction, curva I-V, tipos, aplicaciones | Boylestad cap 6-7 + Sze cap 2 |
| 16 | 3×45 min | LF6: BJT y MOSFET — estructura, operación, parámetros | Boylestad cap 8-9 + Sze cap 4 |
| 17 | 2×45 min | Vacío: fundamentos Leybold cap 1-2 (relevante para TQ3) | Leybold PDF |
|    | 1×45 min | `/sem-fichas LF6 dispositivos — flashcards ES/DE/EN` | agente |
| 18 | 3×45 min | **Repaso general LF1-4 + LF7-8**: quiz tipo IHK en DE | `/sem-html Repaso General` |

---

### FASE 5 — Preparación final (sem. 19: 20-31 jul 2026) ~7h
*Objetivo: llegar al primer día de clase con confianza*

| Día | Actividad |
|-----|-----------|
| Lun | Revisar vocabulario DE acumulado (todos los módulos) |
| Mar | Simulación de examen oral en DE: explicar LF1-4 sin notas |
| Mié | Leer Ausbildungsverordnung: entender estructura exacta del programa |
| Jue | `/sem-de ejercicio` — preguntas escritas tipo IHK en todos los temas |
| Vie | Revisar May & Spanos cap 1 (visión general FAB) — llegada con contexto sólido |

---

## Resumen de horas estimadas

| Fase | Período | Semanas | Horas |
|------|---------|---------|-------|
| 0 — Orientación | 18-31 mar | 2 | ~15 h |
| 1 — Elektrotechnik (LF1) | 1-30 abr | 4 | ~30 h |
| 2 — Química + Reinraum (LF2+LF4) | 1-21 may | 3 | ~22 h |
| 3 — Litografía + Capas (LF7+LF8) | 22 may-20 jun | 5 | ~37 h |
| 4 — Dispositivos + Repaso (LF6) | 21 jun-19 jul | 4 | ~30 h |
| 5 — Preparación final | 20-31 jul | 1.5 | ~7 h |
| **TOTAL** | | **~19 sem** | **~141 h** |

---

## Distribución de idioma en el estudio

| Actividad | Idioma |
|-----------|--------|
| Lectura de fuentes técnicas | ES (comprensión) + EN (fuentes) |
| Vocabulario técnico | DE (Fachbegriffe IHK) |
| Escritura de respuestas | DE (práctica IHK-Prüfung) |
| Flashcards | DE → ES → EN |
| Páginas HTML | ES (explicación) + DE (términos) |

**Alemán IHK — mínimo semanal:**
- 20 términos técnicos nuevos/semana (DE + artículo + contexto)
- 1 ejercicio de escritura en DE por semana (Modo 3: `/sem-de ejercicio`)
- Leer 1 página del Rahmenlehrplan en DE por semana

---

## Notas importantes

1. **LF5 (Software/Office)**: no necesita preparación — tu nivel académico lo supera ampliamente.
2. **LF12 (MEMS)** y **LF13 (Anlagen)**: muy prácticos, aprenden mejor IN-SITU en la academia. No priorizar en autoaprendizaje.
3. **LF9 (Dotierung)** y **LF10 (Backend)**: tercer año — no urgente para preparación previa.
4. **LF11 (SPC)**: conceptos estadísticos básicos; tu background científico es suficiente para el nivel IHK.
5. **Tu ventaja real en LF2**: pH, Gefahrstoffe, química de solventes → dominarás esto desde el primer día.
6. **Tu mayor desafío en LF6**: 140 horas de circuitos → el más extenso del programa. Empezar en Fase 4 es suficiente para tener base; profundizar durante el Umschulung.
