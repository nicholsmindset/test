/* Wellbeing — MVP front-end logic. Zero dependencies. */
(function () {
  "use strict";

  const STORAGE_KEY = "wellbeing.mvp.v1";

  const todayActivities = [
    { id: "walk", time: "8:00 AM", label: "Morning walk", type: "t-walk", icon: iconWalk },
    { id: "lunch", time: "12:30 PM", label: "Lunch time", type: "t-lunch", icon: iconLunch },
    { id: "pushup", time: "2:30 PM", label: "Push-ups", type: "t-pushup", icon: iconPushup },
    { id: "temp", time: "4:00 PM", label: "Elevated body temperature", type: "t-temp", icon: iconTemp },
  ];

  const suggestions = [
    {
      id: "mindful",
      title: "Mindful moment",
      desc: "Take a breath, slow down",
      ill: illMindful,
    },
    {
      id: "community",
      title: "Community insight",
      desc: "See how others are feeling",
      ill: illCommunity,
    },
    {
      id: "report",
      title: "Download report",
      desc: "Get weekly health summary",
      ill: illReport,
    },
  ];

  const feelingScale = [
    { atOrAbove: 80, title: "Hungry", sub: "Time for a snack" },
    { atOrAbove: 55, title: "Comfortable", sub: "Feeling balanced" },
    { atOrAbove: 30, title: "Satisfied", sub: "Feel comfortable" },
    { atOrAbove: 0, title: "Very full", sub: "Maybe take a walk" },
  ];

  const state = load() || {
    activeTab: "home",
    range: "weekly",
    feeling: 20,
    completedActivities: {},
    history: [],
  };

  /* ─── Render ─── */

  function renderActivities() {
    const root = document.getElementById("activities");
    root.innerHTML = "";
    todayActivities.forEach((a) => {
      const el = document.createElement("button");
      el.className = `act ${a.type}`;
      el.setAttribute("aria-pressed", state.completedActivities[a.id] ? "true" : "false");
      el.innerHTML = `
        <div class="icon">${a.icon()}</div>
        <div class="time">${a.time}</div>
        <div class="label">${a.label}</div>
      `;
      el.addEventListener("click", () => {
        state.completedActivities[a.id] = !state.completedActivities[a.id];
        save();
        toast(
          state.completedActivities[a.id]
            ? `Logged: ${a.label}`
            : `Removed: ${a.label}`
        );
        el.setAttribute("aria-pressed", state.completedActivities[a.id] ? "true" : "false");
        el.style.outline = state.completedActivities[a.id]
          ? "2px solid rgba(139,92,246,0.6)"
          : "none";
      });
      if (state.completedActivities[a.id]) {
        el.style.outline = "2px solid rgba(139,92,246,0.6)";
      }
      root.appendChild(el);
    });
  }

  function renderSuggestions() {
    const root = document.getElementById("suggestions");
    root.innerHTML = "";
    suggestions.forEach((s) => {
      const el = document.createElement("button");
      el.className = "sug";
      el.innerHTML = `
        <div class="ill">${s.ill()}</div>
        <div class="title">${s.title}</div>
        <div class="desc">${s.desc}</div>
      `;
      el.addEventListener("click", () => handleSuggestion(s.id));
      root.appendChild(el);
    });
  }

  function handleSuggestion(id) {
    if (id === "mindful") {
      toast("Inhale… 4s · hold 4s · exhale 4s");
    } else if (id === "community") {
      toast("63% of users feel satisfied today");
    } else if (id === "report") {
      const blob = buildReport();
      const url = URL.createObjectURL(
        new Blob([blob], { type: "text/plain;charset=utf-8" })
      );
      const a = document.createElement("a");
      a.href = url;
      a.download = `wellbeing-report-${new Date().toISOString().slice(0, 10)}.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast("Report downloaded");
    }
  }

  function buildReport() {
    const completed = todayActivities
      .filter((a) => state.completedActivities[a.id])
      .map((a) => `  • ${a.time} — ${a.label}`)
      .join("\n");
    const fl = feelingFor(state.feeling);
    return [
      "Wellbeing — Daily Health Report",
      "─".repeat(34),
      `Date: ${new Date().toLocaleDateString()}`,
      `Current feeling: ${fl.title} (${state.feeling}/100)`,
      `Note: ${fl.sub}`,
      "",
      "Activities completed:",
      completed || "  (none)",
      "",
      `Range: ${state.range}`,
      `History entries: ${state.history.length}`,
    ].join("\n");
  }

  function feelingFor(v) {
    return feelingScale.find((s) => v >= s.atOrAbove) || feelingScale[feelingScale.length - 1];
  }

  /* ─── Splash → home ─── */
  document.getElementById("enterApp").addEventListener("click", () => {
    document
      .querySelector('[data-screen="home"]')
      .scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    toast("Welcome back, Jhon");
  });

  /* ─── See all ─── */
  document.getElementById("seeAll").addEventListener("click", () => {
    toast("Activity history coming soon");
  });

  /* ─── Bottom tabs ─── */
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeTab = btn.dataset.tab;
      save();
      if (btn.dataset.tab === "report") {
        document
          .querySelector('[data-screen="report"]')
          .scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } else if (btn.dataset.tab === "home") {
        document
          .querySelector('[data-screen="home"]')
          .scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } else if (btn.dataset.tab === "history") {
        toast("History — last " + state.history.length + " check-ins");
      } else if (btn.dataset.tab === "checkin") {
        toast("Daily check-in saved");
        state.history.push({ at: Date.now(), feeling: state.feeling });
        save();
      }
    });
  });

  /* ─── Segmented control ─── */
  document.querySelectorAll(".seg").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".seg").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.range = btn.dataset.range;
      save();
      toast(`Showing ${state.range} report`);
    });
    if (btn.dataset.range === state.range) {
      document.querySelectorAll(".seg").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    }
  });

  /* ─── Slider ─── */
  const slider = document.getElementById("feelSlider");
  const fill = document.getElementById("sliderFill");
  const titleEl = document.getElementById("statusTitle");
  const subEl = document.getElementById("statusSub");

  function applySlider(val) {
    fill.style.height = `${val}%`;
    const f = feelingFor(val);
    titleEl.textContent = f.title;
    subEl.textContent = f.sub;
  }
  slider.value = state.feeling;
  applySlider(state.feeling);
  slider.addEventListener("input", (e) => {
    state.feeling = Number(e.target.value);
    applySlider(state.feeling);
  });
  slider.addEventListener("change", () => save());

  /* ─── Next button ─── */
  document.getElementById("nextBtn").addEventListener("click", () => {
    state.history.push({ at: Date.now(), feeling: state.feeling });
    save();
    const f = feelingFor(state.feeling);
    toast(`Saved — feeling ${f.title.toLowerCase()}`);
  });

  /* ─── Boot ─── */
  renderActivities();
  renderSuggestions();

  /* ─── Helpers ─── */
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }
  let toastTimer;
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2000);
  }

  /* ─── Inline SVG icons (kept here so HTML stays clean) ─── */
  function iconWalk() {
    return `<svg viewBox="0 0 24 24"><path d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 22l3-9 4 2 1 5h2l-2-7-3-2 1-5-3 1-2 4 2 1-3 10z" fill="currentColor"/></svg>`;
  }
  function iconLunch() {
    return `<svg viewBox="0 0 24 24"><path d="M3 11c0-3 4-5 9-5s9 2 9 5H3zm0 2h18c0 4-4 7-9 7s-9-3-9-7zM6 4c0 1 1 1 1 2s-1 1-1 2M10 4c0 1 1 1 1 2s-1 1-1 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
  }
  function iconPushup() {
    return `<svg viewBox="0 0 24 24"><path d="M2 18h20M5 14c1-2 3-3 6-3s5 1 6 3M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
  }
  function iconTemp() {
    return `<svg viewBox="0 0 24 24"><path d="M12 14V4a2 2 0 1 1 4 0v10a4 4 0 1 1-4 0z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="14" cy="17" r="2" fill="currentColor"/></svg>`;
  }
  function illMindful() {
    return `<svg viewBox="0 0 48 48"><circle cx="24" cy="14" r="5" fill="#a78bfa"/><path d="M10 40c2-8 8-12 14-12s12 4 14 12" fill="none" stroke="#a78bfa" stroke-width="2.4" stroke-linecap="round"/><path d="M14 32c-3 0-5 2-5 4M34 32c3 0 5 2 5 4" fill="none" stroke="#a78bfa" stroke-width="2.4" stroke-linecap="round"/></svg>`;
  }
  function illCommunity() {
    return `<svg viewBox="0 0 48 48"><circle cx="16" cy="16" r="4" fill="#f472b6"/><circle cx="32" cy="16" r="4" fill="#a78bfa"/><circle cx="24" cy="26" r="5" fill="#67e8f9"/><path d="M6 38c2-5 6-7 10-7M42 38c-2-5-6-7-10-7M14 40c2-4 6-6 10-6s8 2 10 6" fill="none" stroke="#7a6cad" stroke-width="2" stroke-linecap="round"/></svg>`;
  }
  function illReport() {
    return `<svg viewBox="0 0 48 48"><rect x="8" y="34" width="6" height="8" rx="1" fill="#a78bfa"/><rect x="20" y="24" width="6" height="18" rx="1" fill="#c084fc"/><rect x="32" y="14" width="6" height="28" rx="1" fill="#f472b6"/><path d="M8 12l10 8 8-6 14-10" fill="none" stroke="#7a6cad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 4h6v6" fill="none" stroke="#7a6cad" stroke-width="2" stroke-linecap="round"/></svg>`;
  }
})();
