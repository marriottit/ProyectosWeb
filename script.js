// Tabla tarifaria exacta según especificaciones
const TARIFAS_EXACTAS = [
  { desde: 50, hasta: 99, tarifa: 0.091, costoBase: 0 },
  { desde: 100, hasta: 149, tarifa: 0.093, costoBase: 4.55 },
  { desde: 150, hasta: 199, tarifa: 0.095, costoBase: 9.2 },
  { desde: 200, hasta: 249, tarifa: 0.097, costoBase: 13.95 },
  { desde: 250, hasta: 299, tarifa: 0.099, costoBase: 18.8 },
  { desde: 300, hasta: 349, tarifa: 0.101, costoBase: 23.75 },
  { desde: 350, hasta: 404, tarifa: 0.103, costoBase: 28.8 },
  { desde: 405, hasta: 699, tarifa: 0.105, costoBase: 39.73 },
  { desde: 700, hasta: 999, tarifa: 0.1285, costoBase: 77.63 },
  { desde: 1000, hasta: 1499, tarifa: 0.145, costoBase: 121.13 },
  { desde: 1500, hasta: 1999, tarifa: 0.1709, costoBase: 206.58 },
  { desde: 2000, hasta: 2499, tarifa: 0.2752, costoBase: 344.18 },
  { desde: 2500, hasta: 3500, tarifa: 0.436, costoBase: 562.18 },
  { desde: 3501, hasta: Number.POSITIVE_INFINITY, tarifa: 0.6812, costoBase: 1244.06 },
]

// 🏷️ DATOS DE SISTEMAS EXACTOS COMO EN EL TSX
const systemsData = [
  {
    range: [0, 50],
    systems: [
      {
        name: "Power Station 1000W",
        description: "Power Station 1000W",
        roi: null,
        type: "POWER STATION",
        price: 770.75,
        priceWithIVA: 886.36,
        panels: 0,
        monthlySavings: 0,
        annualSavings: 0,
        // Nuevos campos para cálculo FTV
        produccionMensual: 0, // kWh que produce el sistema por mes
        produccionAnual: 0, // kWh que produce el sistema por año
        img: "https://almacenesmarriott.com/wp-content/uploads/2023/12/O17004__2.jpg",
      },
    ],
  },
  {
    range: [51, 100],
    systems: [
      {
        name: "Power Station 1000W",
        description: "Power Station 1000W",
        roi: null,
        type: "POWER STATION",
        price: 770.75,
        priceWithIVA: 886.36,
        panels: 0,
        monthlySavings: 0,
        annualSavings: 0,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://almacenesmarriott.com/wp-content/uploads/2023/12/O17004__2.jpg",
      },
    ],
  },
  {
    range: [101, 200],
    systems: [
      {
        name: "Power Station 2400W",
        description: "Power Station 2400W",
        roi: null,
        type: "POWER STATION",
        price: 1250.0,
        priceWithIVA: 1437.5,
        panels: 0,
        monthlySavings: 0,
        annualSavings: 0,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://almacenesmarriott.com/wp-content/uploads/2025/07/P81026.jpg",
      },
    ],
  },
  {
    range: [201, 400],
    systems: [
      {
        name: "BLUESUN 1KW",
        description: "INVERSOR 110VAC 1KW + 2 BATERIA LITIO LIFEPO4 1.33KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 1329.0,
        priceWithIVA: null,
        panels: 2,
        monthlySavings: 80,
        annualSavings: 960,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/pvgBW8Fz/1kw.jpg",
      },
    ],
  },
  {
    range: [401, 600],
    systems: [
      {
        name: "BLUESUN 3KW",
        description: "INVERSOR SPLIT PHASE 3KW + BATERIA LITIO LIFEPO4 5.12KWH",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 2899.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 180,
        annualSavings: 2160,
        produccionMensual: 200,
        produccionAnual: 2400,
        img: "https://i.ibb.co/RTXG2Nvb/SISTEMA-OFF-GRID-INVERSOR-SPLIT-PHASE-3-KW-PV-INPUT-2880-W-1-BATERIA-LIFEPO4-LITIO-5-12-KWH.png",
      },
      {
        name: "BLUESUN 5KW",
        description: "INVERSOR SPLIT PHASE 5KW + BATERIA LITIO LIFEPO4 10.24KWH",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 4299.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 280,
        annualSavings: 3360,
        produccionMensual: 350,
        produccionAnual: 4200,
        img: "https://i.ibb.co/7xQF7j9k/SISTEMA-OFF-GRID-INVERSOR-SINGLE-PHASE-5-KW-PV-INPUT-5000-W-1-BATERIA-LITIO-LIFEPO4-5-KWH.png",
      },
    ],
  },
  {
    range: [601, 700],
    systems: [
      {
        name: "BLUESUN 3KW",
        description: "INVERSOR SPLIT PHASE 3KW (PV INPUT 2880W) + 1 BATERIA LIFEPO4 LITIO 5.12KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 2589.0,
        priceWithIVA: null,
        panels: 4,
        monthlySavings: 150,
        annualSavings: 1800,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/RTXG2Nvb/SISTEMA-OFF-GRID-INVERSOR-SPLIT-PHASE-3-KW-PV-INPUT-2880-W-1-BATERIA-LIFEPO4-LITIO-5-12-KWH.png",
      },
      {
        name: "AIO 6KW - 10 kWh",
        description: "INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 10KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 3949.0,
        priceWithIVA: null,
        panels: 8,
        monthlySavings: 220,
        annualSavings: 2640,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/8gM6Fjd6/SISTEMA-ALL-IN-ONE-INVERSOR-SPLIT-PHASE-6-KW-PV-INPUT-3000-W-C-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
      {
        name: "SOSEN 5K",
        description: "INVERSOR SINGLE PHASE 5KW PV (INPUT 5000W) + 1 BATERIA LITIO LIFEPO4 5KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 2589.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 180,
        annualSavings: 2160,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/7xQF7j9k/SISTEMA-OFF-GRID-INVERSOR-SINGLE-PHASE-5-KW-PV-INPUT-5000-W-1-BATERIA-LITIO-LIFEPO4-5-KWH.png",
      },
    ],
  },
  {
    range: [701, 800],
    systems: [
      {
        name: "BLUESUN 5KW",
        description: "INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LIFEPO4 LITIO 10.85KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 3989.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 250,
        annualSavings: 3000,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/7dwpcP9V/SISTEMA-OFF-GRID-INVERSOR-SPLIT-PHASE-5-KW-PV-INPUT-2880-W-1-BATERIA-LITIO-LIFEPO4-10-85-KWH.png",
      },
      {
        name: "AIO 6KW - 10 kWh",
        description: "INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 10KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 3949.0,
        priceWithIVA: null,
        panels: 8,
        monthlySavings: 220,
        annualSavings: 2640,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/8gM6Fjd6/SISTEMA-ALL-IN-ONE-INVERSOR-SPLIT-PHASE-6-KW-PV-INPUT-3000-W-C-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
      {
        name: "SOSEN 5K",
        description: "INVERSOR SINGLE PHASE 5KW PV (INPUT 5000W) + 1 BATERIA LITIO LIFEPO4 5KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 2589.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 180,
        annualSavings: 2160,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/7xQF7j9k/SISTEMA-OFF-GRID-INVERSOR-SINGLE-PHASE-5-KW-PV-INPUT-5000-W-1-BATERIA-LITIO-LIFEPO4-5-KWH.png",
      },
    ],
  },
  {
    range: [801, 900],
    systems: [
      {
        name: "BLUESUN 5KW",
        description: "INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LIFEPO4 LITIO 10.85KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 3989.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 250,
        annualSavings: 3000,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/7dwpcP9V/SISTEMA-OFF-GRID-INVERSOR-SPLIT-PHASE-5-KW-PV-INPUT-2880-W-1-BATERIA-LITIO-LIFEPO4-10-85-KWH.png",
      },
      {
        name: "AIO 6KW - 15 kWh",
        description: "INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 4949.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 280,
        annualSavings: 3360,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/0pMcLHH1/SISTEMA-ALL-IN-ONE-INVERSOR-SPLIT-PHASE-6-KW-PV-INPUT-3000-W-C-BATERIA-LITIO-LIFEPO4-15-KW.png",
      },
      {
        name: "SOSEN 5K",
        description: "INVERSOR SINGLE PHASE 5KW PV (INPUT 5000W) + 1 BATERIA LITIO LIFEPO4 5KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 2589.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 180,
        annualSavings: 2160,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/7xQF7j9k/SISTEMA-OFF-GRID-INVERSOR-SINGLE-PHASE-5-KW-PV-INPUT-5000-W-1-BATERIA-LITIO-LIFEPO4-5-KWH.png",
      },
    ],
  },
  {
    range: [901, 1000],
    systems: [
      {
        name: "ON GRID 3KW + 6 PANELES",
        description: "INVERSOR SINGLE PHASE 3KW + SISTEMA 6 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 3050.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 320,
        annualSavings: 3840,
        produccionMensual: 324, // 3.9 kWp * 1080 kWh/kWp/año / 12 meses = 324 kWh/mes
        produccionAnual: 3888, // 3.6 kWp * 1080 kWh/kWp/año = 3888 kWh/año
        img: "https://i.ibb.co/RTXG2Nvb/SISTEMA-OFF-GRID-INVERSOR-SPLIT-PHASE-3-KW-PV-INPUT-2880-W-1-BATERIA-LIFEPO4-LITIO-5-12-KWH.png",
      },
      {
        name: "BLUESUN 5KW + 4 PANELES",
        description:
          "INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 10.85KWH + SISTEMA DE 4 PANELES",
        roi: null,
        type: "Sistema de Respaldo",
        price: 4839.0,
        priceWithIVA: null,
        panels: 4,
        monthlySavings: 350,
        annualSavings: 4200,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/7dwpcP9V/SISTEMA-OFF-GRID-INVERSOR-SPLIT-PHASE-5-KW-PV-INPUT-2880-W-1-BATERIA-LITIO-LIFEPO4-10-85-KWH.png",
      },
      {
        name: "AIO 6KW - 15 kWh",
        description: "INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 4949.0,
        priceWithIVA: null,
        panels: 0,
        monthlySavings: 280,
        annualSavings: 3360,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/0pMcLHH1/SISTEMA-ALL-IN-ONE-INVERSOR-SPLIT-PHASE-6-KW-PV-INPUT-3000-W-C-BATERIA-LITIO-LIFEPO4-15-KW.png",
      },
    ],
  },
  {
    range: [1001, 1200],
    systems: [
      {
        name: "ON GRID 5KW + 10 PANELES",
        description: "INVERSOR SINGLE PHASE 5KW + SISTEMA 10 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 4653.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 450,
        annualSavings: 5400,
        produccionMensual: 540, // 6.5 kWp * 1080 kWh/kWp/año / 12 meses = 540 kWh/mes
        produccionAnual: 6480, // 6.0 kWp * 1080 kWh/kWp/año = 6480 kWh/año
        img: "https://i.ibb.co/7xQF7j9k/SISTEMA-OFF-GRID-INVERSOR-SINGLE-PHASE-5-KW-PV-INPUT-5000-W-1-BATERIA-LITIO-LIFEPO4-5-KWH.png",
      },
      {
        name: "BLUESUN 5KW + 4 PANELES",
        description:
          "INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 10.85KWH + SISTEMA DE 4 PANELES SOLARES",
        roi: null,
        type: "Sistema de Respaldo",
        price: 4839.0,
        priceWithIVA: null,
        panels: 4,
        monthlySavings: 350,
        annualSavings: 4200,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/7dwpcP9V/SISTEMA-OFF-GRID-INVERSOR-SPLIT-PHASE-5-KW-PV-INPUT-2880-W-1-BATERIA-LITIO-LIFEPO4-10-85-KWH.png",
      },
      {
        name: "AIO 6KW - 15 kWh",
        description: "INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 4949.0,
        priceWithIVA: null,
        panels: 0,
        monthlySavings: 280,
        annualSavings: 3360,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/0pMcLHH1/SISTEMA-ALL-IN-ONE-INVERSOR-SPLIT-PHASE-6-KW-PV-INPUT-3000-W-C-BATERIA-LITIO-LIFEPO4-15-KW.png",
      },
    ],
  },
  {
    range: [1201, 1500],
    systems: [
      {
        name: "ON GRID 5KW + 10 PANELES",
        description: "INVERSOR SINGLE PHASE 5KW + SISTEMA 10 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 4653.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 450,
        annualSavings: 5400,
        produccionMensual: 540,
        produccionAnual: 6480,
        img: "https://i.ibb.co/7xQF7j9k/SISTEMA-OFF-GRID-INVERSOR-SINGLE-PHASE-5-KW-PV-INPUT-5000-W-1-BATERIA-LITIO-LIFEPO4-5-KWH.png",
      },
      {
        name: "SOSEN 10 KW+ 20 PANELES",
        description:
          "INVERSOR SPLIT PHASE 10KW (PV INPUT 15000W) + 1 BATERIA LITIO LIFEPO4 10KWH + SISTEMA DE 20 PANELES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 11769.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 520,
        annualSavings: 6240,
        produccionMensual: 540,
        produccionAnual: 6480,
        img: "https://i.ibb.co/KxhZ8TT5/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-10-KW-PV-INPUT-15000-W-1-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
      {
        name: "AIO 6KW - 15 kWh",
        description: "INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        roi: null,
        type: "Sistema de Respaldo",
        price: 4949.0,
        priceWithIVA: null,
        panels: 0,
        monthlySavings: 580,
        annualSavings: 6960,
        produccionMensual: 0,
        produccionAnual: 0,
        img: "https://i.ibb.co/0pMcLHH1/SISTEMA-ALL-IN-ONE-INVERSOR-SPLIT-PHASE-6-KW-PV-INPUT-3000-W-C-BATERIA-LITIO-LIFEPO4-15-KW.png",
      },
    ],
  },
  {
    range: [1501, 1800],
    systems: [
      {
        name: "ON GRID 5KW + 10 PANELES",
        description: "INVERSOR SINGLE PHASE 5KW + SISTEMA 10 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 4653.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 450,
        annualSavings: 5400,
        produccionMensual: 540,
        produccionAnual: 6480,
        img: "https://i.ibb.co/7xQF7j9k/SISTEMA-OFF-GRID-INVERSOR-SINGLE-PHASE-5-KW-PV-INPUT-5000-W-1-BATERIA-LITIO-LIFEPO4-5-KWH.png",
      },
      {
        name: "SOSEN 10 KW + 15 PANELES",
        description:
          "INVERSOR SPLIT PHASE 10KW (PV INPUT 15000W) + 1 BATERIA LITIO LIFEPO4 10KWH + SISTEMA DE 15 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 10524.0,
        priceWithIVA: null,
        panels: 15,
        monthlySavings: 650,
        annualSavings: 7800,
        produccionMensual: 810, // 9.0 kWp * 1080 kWh/kWp/año / 12 meses = 810 kWh/mes
        produccionAnual: 9720, // 9.0 kWp * 1080 kWh/kWp/año = 9720 kWh/año
        img: "https://i.ibb.co/KxhZ8TT5/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-10-KW-PV-INPUT-15000-W-1-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
      {
        name: "SOSEN FOX 11KW + 15 PANELES",
        description:
          "INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 15 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 13824.0,
        priceWithIVA: null,
        panels: 15,
        monthlySavings: 720,
        annualSavings: 8640,
        produccionMensual: 810,
        produccionAnual: 9720,
        img: "https://i.ibb.co/XkZdFr02/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-11-4-KW-PV-INPUT-17000-W-2-BATERIAS-LITIO-LIFEPO4-11-KWH.png",
      },
    ],
  },
  {
    range: [1801, 2000],
    systems: [
      {
        name: "ON GRID 10KW + 20 PANELES",
        description: "INVERSOR SINGLE PHASE 10KW + SISTEMA 20 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 8775.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 850,
        annualSavings: 10200,
        produccionMensual: 1080, // 12.0 kWp * 1080 kWh/kWp/año / 12 meses = 1080 kWh/mes
        produccionAnual: 12960, // 12.0 kWp * 1080 kWh/kWp/año = 12960 kWh/año
        img: "https://i.ibb.co/KxhZ8TT5/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-10-KW-PV-INPUT-15000-W-1-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
      {
        name: "SOSEN FOX 11KW  + 20 PANELES",
        description:
          "INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 14949.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 920,
        annualSavings: 11040,
        produccionMensual: 1080,
        produccionAnual: 12960,
        img: "https://i.ibb.co/XkZdFr02/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-11-4-KW-PV-INPUT-17000-W-2-BATERIAS-LITIO-LIFEPO4-11-KWH.png",
      },
      {
        name: "SOSEN 15 KW + 20 PANELES",
        description:
          "INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 14449.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 920,
        annualSavings: 11040,
        produccionMensual: 1080,
        produccionAnual: 12960,
        img: "https://i.ibb.co/fGY2LRwd/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-15-KW-PV-INPUT-22500-W-1-BATERIA-LITIO-LIFEPO4-15-KWH.png",
      },
    ],
  },
  {
    range: [2001, 2200],
    systems: [
      {
        name: "ON GRID 10KW + 20 PANELES",
        description: "INVERSOR SINGLE PHASE 10KW + SISTEMA 20 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 8775.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 850,
        annualSavings: 10200,
        produccionMensual: 1080,
        produccionAnual: 12960,
        img: "https://i.ibb.co/KxhZ8TT5/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-10-KW-PV-INPUT-15000-W-1-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
      {
        name: "SOSEN FOX 11KW  + 20 PANELES",
        description:
          "INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 14949.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 850,
        annualSavings: 10200,
        produccionMensual: 1080,
        produccionAnual: 12960,
        img: "https://i.ibb.co/XkZdFr02/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-11-4-KW-PV-INPUT-17000-W-2-BATERIAS-LITIO-LIFEPO4-11-KWH.png",
      },
      {
        name: "SOSEN 15 KW + 20 PANELES",
        description:
          "INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 14449.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 920,
        annualSavings: 11040,
        produccionMensual: 1080,
        produccionAnual: 12960,
        img: "https://i.ibb.co/fGY2LRwd/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-15-KW-PV-INPUT-22500-W-1-BATERIA-LITIO-LIFEPO4-15-KWH.png",
      },
    ],
  },
  {
    range: [2201, 2500],
    systems: [
      {
        name: "ON GRID 10KW + 20 PANELES",
        description: "INVERSOR SINGLE PHASE 10KW + SISTEMA 20 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 8775.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 850,
        annualSavings: 10200,
        produccionMensual: 1080,
        produccionAnual: 12960,
        img: "https://i.ibb.co/KxhZ8TT5/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-10-KW-PV-INPUT-15000-W-1-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
      {
        name: "SOSEN FOX 11KW  + 20 PANELES",
        description:
          "INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 14949.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 850,
        annualSavings: 10200,
        produccionMensual: 1080,
        produccionAnual: 12960,
        img: "https://i.ibb.co/XkZdFr02/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-11-4-KW-PV-INPUT-17000-W-2-BATERIAS-LITIO-LIFEPO4-11-KWH.png",
      },
      {
        name: "SOSEN 15 KW + 20 PANELES",
        description:
          "INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 14449.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 920,
        annualSavings: 11040,
        produccionMensual: 1080,
        produccionAnual: 12960,
        img: "https://i.ibb.co/fGY2LRwd/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-15-KW-PV-INPUT-22500-W-1-BATERIA-LITIO-LIFEPO4-15-KWH.png",
      },
    ],
  },
  {
    range: [2501, 3000],
    systems: [
      {
        name: "ON GRID 10KW + 24 PANELES",
        description: "INVERSOR SINGLE PHASE 10KW + SISTEMA 24 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 9435.0,
        priceWithIVA: null,
        panels: 24,
        monthlySavings: 1050,
        annualSavings: 12600,
        produccionMensual: 1296, // 14.4 kWp * 1080 kWh/kWp/año / 12 meses = 1296 kWh/mes
        produccionAnual: 15552, // 14.4 kWp * 1080 kWh/kWp/año = 15552 kWh/año
        img: "https://i.ibb.co/KxhZ8TT5/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-10-KW-PV-INPUT-15000-W-1-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
      {
        name: "SOSEN FOX 11KW  + 30 PANELES",
        description:
          "INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 30 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 17199.0,
        priceWithIVA: null,
        panels: 30,
        monthlySavings: 1200,
        annualSavings: 14400,
        produccionMensual: 1620, // 18.0 kWp * 1080 kWh/kWp/año / 12 meses = 1620 kWh/mes
        produccionAnual: 19440, // 18.0 kWp * 1080 kWh/kWp/año = 19440 kWh/año
        img: "https://i.ibb.co/XkZdFr02/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-11-4-KW-PV-INPUT-17000-W-2-BATERIAS-LITIO-LIFEPO4-11-KWH.png",
      },
      {
        name: "SOSEN 15 KW + 30 PANELES",
        description:
          "INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH + SISTEMA DE 30 PANELES SOLARES",
        roi: null,
        type: "Sistema de Ahorro + Respaldo",
        price: 16699.0,
        priceWithIVA: null,
        panels: 30,
        monthlySavings: 1200,
        annualSavings: 14400,
        produccionMensual: 1620,
        produccionAnual: 19440,
        img: "https://i.ibb.co/fGY2LRwd/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-15-KW-PV-INPUT-22500-W-1-BATERIA-LITIO-LIFEPO4-15-KWH.png",
      },
    ],
  },
  {
    range: [3001, 3500],
    systems: [
      {
        name: "2 SISTEMAS (ON GRID 10KW + 24 PANELES)",
        description: "2 INVERSORES SINGLE PHASE 10KW + SISTEMA 48 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 18870.0,
        priceWithIVA: null,
        panels: 24,
        monthlySavings: 1800,
        annualSavings: 21600,
        produccionMensual: 2592, // 28.8 kWp * 1080 kWh/kWp/año / 12 meses = 2592 kWh/mes
        produccionAnual: 31104, // 28.8 kWp * 1080 kWh/kWp/año = 31104 kWh/año
        img: "https://i.ibb.co/KxhZ8TT5/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-10-KW-PV-INPUT-15000-W-1-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
    ],
  },
  {
    range: [3501, 4000],
    systems: [
      {
        name: "2 SISTEMAS (ON GRID 10KW + 24 PANELES)",
        description: "2 INVERSORES SINGLE PHASE 10KW + SISTEMA 48 PANELES SOLARES",
        roi: null,
        type: "Sistema de ahorro energetico",
        price: 18870.0,
        priceWithIVA: null,
        panels: 24,
        monthlySavings: 1800,
        annualSavings: 21600,
        produccionMensual: 2592,
        produccionAnual: 31104,
        img: "https://i.ibb.co/KxhZ8TT5/SISTEMA-HIBRIDO-INVERSOR-SPLIT-PHASE-10-KW-PV-INPUT-15000-W-1-BATERIA-LITIO-LIFEPO4-10-KWH.png",
      },
    ],
  },
]

// 🔧 DATOS PARA CALCULADORA DE RESPALDO
const BACKUP_PRODUCTS = [
  { name: "Lamparas / Focos", w: 18, fc: 0.6, start: 1, fcoinc: 0.6 },
  { name: "Tomacorrientes uso general", w: 150, fc: 0.3, start: 1, fcoinc: 0 },
  { name: "Bomba de agua 2 HP INVERTER*", w: 1500, fc: 0.8, start: 2, fcoinc: 0.3 },
  { name: "Cámaras IP", w: 20, fc: 1.0, start: 1, fcoinc: 0 },
  { name: "Switch/Router WiFi/Internet", w: 50, fc: 1.0, start: 1, fcoinc: 0 },
  { name: "Laptop", w: 80, fc: 0.7, start: 1, fcoinc: 0 },
  { name: "Computador de escritorio", w: 250, fc: 1.0, start: 1, fcoinc: 0 },
  { name: "Air-Fryer", w: 1200, fc: 0.7, start: 1, fcoinc: 0.2 },
  {
    name: 'Televisor 55"',
    w: 300,
    fc: 0.9,
    start: 1,
    fcoinc: 0.7,
  },
  { name: "Cocina de inducción", w: 6000, fc: 1.0, start: 1, fcoinc: 0.5 },
  { name: "Cafetera/Tostadora (resistivos)", w: 1200, fc: 1.0, start: 1, fcoinc: 0.1 },
  { name: "Microondas", w: 1500, fc: 1.0, start: 1, fcoinc: 0.1 },
  { name: "Lavadora*", w: 600, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "Secadora*", w: 1800, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "Congelador*", w: 150, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "Nevera 1 puerta*", w: 150, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "Nevera 2 puertas*", w: 300, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "AACC split 9000 BTU*", w: 818.18, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "AACC split 12000 BTU INVERTER*", w: 1090.91, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "AACC split 18000 BTU*", w: 1636.36, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "AACC split 24000 BTU INVERTER*", w: 2181.82, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "AACC split 36000 BTU*", w: 3272.73, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "AACC CENTRAL 45000 BTU*", w: 4090.91, fc: 0.7, start: 3, fcoinc: 0 },
  { name: "AACC CENTRAL 60000 BTU*", w: 5454.55, fc: 0.7, start: 3, fcoinc: 0 },
]

const BACKUP_SYSTEMS_DATA = [
  {
    range: [0, 1],
    systems: [
      {
        name: "BLUESUN 1KW",
        description: "SISTEMA OFF GRID - INVERSOR 110VAC 1KW + 2 BATERIA LITIO LIFEPO4 1.33KWH",
        type: "OFF GRID",
        inv_kW: 1,
        batt_kWh: 2,
        price: 1329.0,
        priceWithIVA: null,
      },
    ],
  },
  {
    range: [1.01, 3],
    systems: [
      {
        name: "BLUESUN 3KW",
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 3KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 LITIO 5.12KWH",
        type: "OFF GRID",
        inv_kW: 3,
        batt_kWh: 5,
        price: 2150.0,
        priceWithIVA: null,
      },
      {
        name: "BLUESUN 1KW",
        description: "SISTEMA OFF GRID - INVERSOR 110VAC 1KW + 2 BATERIA LITIO LIFEPO4 1.33KWH",
        type: "OFF GRID",
        inv_kW: 1,
        batt_kWh: 2,
        price: 1329.0,
        priceWithIVA: null,
      },
    ],
  },
  {
    range: [3.01, 5],
    systems: [
      {
        name: "BLUESUN 5KW",
        description: "SISTEMA OFF GRID - INVERSOR SINGLE PHASE 5KW PV (INPUT 5000W) + 1 BATERIA LITIO LIFEPO4 5KWH",
        type: "OFF GRID",
        inv_kW: 5,
        batt_kWh: 5,
        price: 2850.0,
        priceWithIVA: null,
      },
      {
        name: "BLUESUN 5KW + 10KWH",
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 LITIO 10.85KWH",
        type: "OFF GRID",
        inv_kW: 5,
        batt_kWh: 10,
        price: 3450.0,
        priceWithIVA: null,
      },
      {
        name: "BLUESUN 3KW",
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 3KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 LITIO 5.12KWH",
        type: "OFF GRID",
        inv_kW: 3,
        batt_kWh: 5,
        price: 2150.0,
        priceWithIVA: null,
      },
    ],
  },
  {
    range: [5.01, 6],
    systems: [
      {
        name: "ALL IN ONE 6KW + 10KWH",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 10KWH",
        type: "OFF GRID",
        inv_kW: 6,
        batt_kWh: 10,
        price: 3850.0,
        priceWithIVA: null,
      },
      {
        name: "ALL IN ONE 6KW + 15KWH",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        type: "OFF GRID",
        inv_kW: 6,
        batt_kWh: 15,
        price: 4450.0,
        priceWithIVA: null,
      },
      {
        name: "BLUESUN 5KW + 10KWH",
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 LITIO 10.85KWH",
        type: "OFF GRID",
        inv_kW: 5,
        batt_kWh: 10,
        price: 3450.0,
        priceWithIVA: null,
      },
    ],
  },
  {
    range: [6.01, 11],
    systems: [
      {
        name: "HIBRIDO 10KW + 10KWH",
        description: "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 10KW (PV INPUT 15000W) + 1 BATERIA LITIO LIFEPO4 10KWH",
        type: "Sistema de Ahorro + Respaldo",
        inv_kW: 10,
        batt_kWh: 10,
        price: 5850.0,
        priceWithIVA: null,
      },
      {
        name: "ALL IN ONE 6KW + 15KWH",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        type: "OFF GRID",
        inv_kW: 6,
        batt_kWh: 15,
        price: 4450.0,
        priceWithIVA: null,
      },
      {
        name: "ALL IN ONE 6KW + 10KWH",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 10KWH",
        type: "OFF GRID",
        inv_kW: 6,
        batt_kWh: 10,
        price: 3850.0,
        priceWithIVA: null,
      },
    ],
  },
  {
    range: [11.01, 15],
    systems: [
      {
        name: "HIBRIDO 11.4KW + 20KWH",
        description: "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) + 2 BATERIAS LITIO LIFEPO4 11KWH",
        type: "Sistema de Ahorro + Respaldo",
        inv_kW: 11.4,
        batt_kWh: 20,
        price: 7850.0,
        priceWithIVA: null,
      },
      {
        name: "HIBRIDO 15KW + 15KWH",
        description: "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH",
        type: "Sistema de Ahorro + Respaldo",
        inv_kW: 15,
        batt_kWh: 15,
        price: 6850.0,
        priceWithIVA: null,
      },
      {
        name: "HIBRIDO 10KW + 10KWH",
        description: "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 10KW (PV INPUT 15000W) + 1 BATERIA LITIO LIFEPO4 10KWH",
        type: "Sistema de Ahorro + Respaldo",
        inv_kW: 10,
        batt_kWh: 10,
        price: 5850.0,
        priceWithIVA: null,
      },
    ],
  },
]

function getRecommendedBackupSystems(totalPowerKW) {
  console.log("[v0] Getting recommended systems for power:", totalPowerKW, "kW")

  // Encontrar el rango correspondiente
  const matchingRange = BACKUP_SYSTEMS_DATA.find(
    (range) => totalPowerKW >= range.range[0] && totalPowerKW <= range.range[1],
  )

  if (matchingRange) {
    console.log("[v0] Found matching range:", matchingRange.range, "systems:", matchingRange.systems.length)
    return matchingRange.systems.slice(0, 3) // Máximo 3 sistemas
  } else {
    console.log("[v0] No matching range found, returning empty array")
    return []
  }
}

function getBackupBadgeClass(tipo) {
  switch (tipo) {
    case "OFF GRID":
      return "badge-off-grid"
    case "Sistema de Ahorro + Respaldo":
      return "badge-hibrido"
    default:
      return "badge-power-station"
  }
}

function getBackupSystemIcon(tipo) {
  switch (tipo) {
    case "OFF GRID":
      return '<i class="fas fa-shield-alt"></i>'
    case "Sistema de Ahorro + Respaldo":
      return '<i class="fas fa-star"></i>'
    default:
      return '<i class="fas fa-battery-full"></i>'
  }
}

const BACKUP_KITS = [
  {
    name: "SISTEMA OFF GRID - INVERSOR 110VAC 1KW + 2 BATERIA LITIO LIFEPO4 1.33KWH",
    inv_kW: 1,
    min_kW: 0.01,
    max_kW: 1,
    batt_kWh: 2,
  },
  {
    name: "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 3KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 LITIO 5.12KWH",
    inv_kW: 3,
    min_kW: 1.01,
    max_kW: 3,
    batt_kWh: 5,
  },
  {
    name: "SISTEMA OFF GRID - INVERSOR SINGLE PHASE 5KW PV (INPUT 5000W) + 1 BATERIA LITIO LIFEPO4 5KWH",
    inv_kW: 5,
    min_kW: 3.01,
    max_kW: 5,
    batt_kWh: 5,
  },
  {
    name: "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 LITIO 10.85KWH",
    inv_kW: 5,
    min_kW: 3.01,
    max_kW: 5,
    batt_kWh: 10,
  },
  {
    name: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 10KWH",
    inv_kW: 6,
    min_kW: 5.01,
    max_kW: 6,
    batt_kWh: 10,
  },
  {
    name: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
    inv_kW: 6,
    min_kW: 5.01,
    max_kW: 6,
    batt_kWh: 15,
  },
  {
    name: "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) + 2 BATERIAS LITIO LIFEPO4 11KWH",
    inv_kW: 11,
    min_kW: 11.01,
    max_kW: 14.3,
    batt_kWh: 20,
  },
  {
    name: "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 10KW (PV INPUT 15000W) + 1 BATERIA LITIO LIFEPO4 10KWH",
    inv_kW: 10,
    min_kW: 6.01,
    max_kW: 11,
    batt_kWh: 10,
  },
  {
    name: "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH",
    inv_kW: 15,
    min_kW: 14.4,
    max_kW: 16.5,
    batt_kWh: 15,
  },
].sort((a, b) => a.inv_kW - b.inv_kW)

const BATT_STEPS = [2, 5, 10, 15, 20]

// 🔧 FUNCIONES PARA CALCULADORA DE RESPALDO
const fW = (n) => Math.round(n).toLocaleString("es-EC")
const fKWh = (n) => n.toLocaleString("es-EC", { maximumFractionDigits: 2 })

function ceilStep(kwh) {
  for (const s of BATT_STEPS) {
    if (kwh <= s) return s
  }
  return kwh
}

function pickKit(pk, ek) {
  let c = BACKUP_KITS.filter((k) => pk >= k.min_kW && pk <= k.max_kW && k.batt_kWh >= ek)
  if (c.length) return c[0]
  c = BACKUP_KITS.filter((k) => pk <= k.max_kW && k.batt_kWh >= ek)
  if (c.length) return c[0]
  return BACKUP_KITS[BACKUP_KITS.length - 1]
}

let selectedEquipment = []

function populateEquipmentDropdown() {
  const select = document.getElementById("equipmentSelect")
  select.innerHTML = '<option value="">-- Selecciona un equipo --</option>'
  BACKUP_PRODUCTS.forEach((product, index) => {
    const option = document.createElement("option")
    option.value = index
    option.textContent = `${product.name} (${product.w}W)`
    select.appendChild(option)
  })
}

function addSelectedEquipment() {
  const selectElement = document.getElementById("equipmentSelect")
  const quantityElement = document.getElementById("equipmentQuantity")
  const hoursElement = document.getElementById("equipmentHours")
  const selectedIndex = selectElement.value
  const quantity = Math.max(1, Number.parseFloat(quantityElement.value) || 1)
  const hours = Math.max(0, Number.parseFloat(hoursElement.value) || 0)

  if (selectedIndex === "") {
    alert("Por favor selecciona un equipo")
    return
  }

  const product = BACKUP_PRODUCTS[selectedIndex]
  const equipmentId = `equipment_${Date.now()}_${selectedIndex}`

  // Add to selected equipment array
  selectedEquipment.push({
    id: equipmentId,
    productIndex: selectedIndex,
    product: product,
    quantity: quantity,
    hours: hours,
  })

  // Reset form
  selectElement.value = ""
  quantityElement.value = "1"
  hoursElement.value = "1"

  // Rebuild table
  buildSelectedEquipmentTable()
  recalcBackup()
}

function removeSelectedEquipment(equipmentId) {
  selectedEquipment = selectedEquipment.filter((eq) => eq.id !== equipmentId)
  buildSelectedEquipmentTable()
  recalcBackup()
}

function buildSelectedEquipmentTable() {
  const tbody = document.getElementById("backupTbody")
  if (selectedEquipment.length === 0) {
    tbody.innerHTML = `
      <tr id="noEquipmentRow">
        <td colspan="7" class="text-center no-equipment-message">
          <i class="fas fa-info-circle"></i>
          No hay equipos agregados. Selecciona un equipo arriba para comenzar.
        </td>
      </tr>
    `
    return
  }

  tbody.innerHTML = ""
  selectedEquipment.forEach((equipment) => {
    const tr = document.createElement("tr")
    tr.className = "equipment-row"
    tr.innerHTML = `
      <td>
        <div class="backup-product-info">
          <div class="backup-product-name">${equipment.product.name}</div>
          <div class="backup-product-details">
            Coinc.: ${equipment.product.fcoinc} | FC: ${equipment.product.fc}${equipment.product.start > 1 ? ` | Arranque: x${equipment.product.start}` : ""}
          </div>
        </div>
      </td>
      <td class="text-right">${fW(equipment.product.w)}</td>
      <td class="text-right">
        <input type="number" min="1" step="1" value="${equipment.quantity}" class="backup-input backup-quantity" data-equipment-id="${equipment.id}">
      </td>
      <td class="text-right">
        <input type="number" min="0" step="0.25" value="${equipment.hours}" class="backup-input backup-hours" data-equipment-id="${equipment.id}">
      </td>
      <td class="text-right backup-calculated-value backup-picos" data-equipment-id="${equipment.id}">0</td>
      <td class="text-right backup-calculated-value backup-energia" data-equipment-id="${equipment.id}">0</td>
      <td class="text-center">
        <button class="btn-remove-equipment" onclick="removeSelectedEquipment('${equipment.id}')" title="Eliminar equipo">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `
    tbody.appendChild(tr)
  })
}

function recalcBackup() {
  console.log("[v0] Starting recalcBackup function")
  console.log("[v0] selectedEquipment:", selectedEquipment)

  // Update totals first
  updateBackupTotals()

  if (selectedEquipment.length === 0) {
    console.log("[v0] No equipment selected, hiding results")
    document.getElementById("backupRecommendedSection").style.display = "none"
    return
  }

  let totalPower = 0
  let totalEnergy = 0

  selectedEquipment.forEach((equipment) => {
    const power = equipment.product.w * equipment.quantity
    const energy = power * equipment.hours
    totalPower += power
    totalEnergy += energy
    console.log("[v0] Equipment:", equipment.product.name, "Power:", power, "Energy:", energy)
  })

  console.log("[v0] Total Power (W):", totalPower)
  console.log("[v0] Total Energy (Wh):", totalEnergy)

  const totalPowerKW = totalPower / 1000
  const totalEnergyKWh = totalEnergy / 1000

  console.log("[v0] Total Power (kW):", totalPowerKW)
  console.log("[v0] Total Energy (kWh):", totalEnergyKWh)

  const recommendedSystems = getRecommendedBackupSystems(totalPowerKW)
  console.log("[v0] Recommended systems:", recommendedSystems)

  // Display results using correct HTML elements
  const resultsSection = document.getElementById("backupRecommendedSection")
  const resultsGrid = document.getElementById("backupSistemasGrid")

  if (recommendedSystems.length > 0) {
    console.log("[v0] Displaying", recommendedSystems.length, "recommended systems")

    resultsGrid.innerHTML = recommendedSystems
      .map(
        (sistema, index) => `
        <div class="sistema-card ${index === 0 ? "sistema-destacado" : ""}">
          <div class="sistema-card-header">
            <div class="sistema-type-badge ${getBackupBadgeClass(sistema.type)}">
              ${getBackupSystemIcon(sistema.type)}
              ${sistema.type}
            </div>
            <h3 class="sistema-title">${sistema.description}</h3>
          </div>
          <div class="sistema-card-content">
            <div class="sistema-specs">
              <div class="spec-item">
                <span class="spec-label">Potencia Máxima:</span>
                <span class="spec-value">${sistema.inv_kW} kW</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Capacidad de Batería:</span>
                <span class="spec-value">${sistema.batt_kWh} kWh</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Tu Consumo:</span>
                <span class="spec-value">${totalPowerKW.toFixed(2)} kW / ${totalEnergyKWh.toFixed(2)} kWh</span>
              </div>
            </div>
            <div class="emergency-message">
              <div class="emergency-icon">
                <i class="fas fa-battery-full"></i>
              </div>
              <div class="emergency-content">
                <h4>Sistema de Respaldo Inteligente</h4>
                <ul class="emergency-benefits">
                  <li>Respaldo automático durante cortes de luz</li>
                  <li>Energía solar gratuita durante el día</li>
                  <li>Batería de litio de larga duración</li>
                  <li>Reduce dependencia de la red eléctrica</li>
                  
                </ul>
              </div>
            </div>
            <div class="sistema-price">
              <div class="price-item">
                <span class="price-label">Inversión (Incluye instalación):</span>
                <span class="price-value price-inversion">${formatearMoneda(sistema.price)}</span>
              </div>
            </div>
            <button class="btn-cotizar" onclick="abrirWhatsApp()">
              <i class="fab fa-whatsapp"></i>
              Solicitar Cotización
            </button>
          </div>
        </div>
      `,
      )
      .join("")
  } else {
    console.log("[v0] No suitable systems found")
    resultsGrid.innerHTML = `
      <div class="sistema-card">
        <div class="sistema-card-header">
          <div class="sistema-type-badge badge-power-station">
            <i class="fas fa-tools"></i>
            PERSONALIZADO
          </div>
          <h3 class="sistema-title">Sistema Personalizado Requerido</h3>
        </div>
        <div class="sistema-card-content">
          <div class="sistema-specs">
            <div class="spec-item">
              <span class="spec-label">Tu Consumo:</span>
              <span class="spec-value">${totalPowerKW.toFixed(2)} kW / ${totalEnergyKWh.toFixed(2)} kWh</span>
            </div>
          </div>
          <div class="emergency-message">
            <div class="emergency-content">
              <p>Tu consumo de <strong>${totalPowerKW.toFixed(2)} kW</strong> y <strong>${totalEnergyKWh.toFixed(2)} kWh</strong> requiere un sistema personalizado.</p>
              <p>Contacta a nuestro equipo para una solución a medida.</p>
            </div>
          </div>
          <button class="btn-cotizar" onclick="abrirWhatsApp()">
            <i class="fab fa-whatsapp"></i>
            Contactar Expertos
          </button>
        </div>
      </div>
    `
  }

  resultsSection.style.display = "block"
}

function updateBackupTotals() {
  let totalPicos = 0
  let totalEnergia = 0

  selectedEquipment.forEach((equipment) => {
    const picos = equipment.product.w * equipment.quantity * (equipment.product.factor || 1)
    const energia =
      (equipment.hours * equipment.product.w * (equipment.product.fc || 1) * (equipment.product.coincidencia || 1)) /
      1000
    totalPicos += picos
    totalEnergia += energia
  })

  // Update totals in the table footer
  const picosElement = document.getElementById("backupTotalPicos")
  const energiaElement = document.getElementById("backupTotalEnergia")

  if (picosElement) {
    picosElement.textContent = Math.round(totalPicos).toLocaleString()
  }
  if (energiaElement) {
    energiaElement.textContent = totalEnergia.toFixed(2)
  }
}

function clearBackupCalculator() {
  selectedEquipment = []
  buildSelectedEquipmentTable()
  recalcBackup()

  // Reset form inputs
  document.getElementById("equipmentSelect").value = ""
  document.getElementById("equipmentQuantity").value = "1"
  document.getElementById("equipmentHours").value = "1"

  // Ocultar la sección de sistema recomendado
  const backupRecommendedSection = document.getElementById("backupRecommendedSection")
  if (backupRecommendedSection) {
    backupRecommendedSection.style.display = "none"
  }
}

function exportBackupCSV() {
  let csvContent = "Equipo,Potencia (W),Cantidad,Horas,Picos (W),Energía (kWh)\n"

  selectedEquipment.forEach((equipment) => {
    const quantity = equipment.quantity
    const hours = equipment.hours
    const product = equipment.product
    const PT = quantity * product.w
    const PE = PT * product.fc
    const P = product.start > 1 ? PT * product.start : PE
    const E = (hours * PE * (product.fcoinc === 0 ? 1 : product.fcoinc)) / 1000

    csvContent += `"${product.name}",${product.w},${quantity},${hours},"${fW(P)}","${fKWh(E)}"\n`
  })

  const totalPicos = document.getElementById("backupTotalPicos").textContent
  const totalEnergia = document.getElementById("backupTotalEnergia").textContent
  csvContent += `"TOTALES",,,,"${totalPicos}","${totalEnergia}"\n`

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)
  link.setAttribute("href", url)
  link.setAttribute("download", "calculadora_respaldo.csv")
  link.style.visibility = "hidden"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// ⚡ CONFIGURACIÓN DE POWER AUTOMATE - URL CORREGIDA
const POWER_AUTOMATE_URL =
  "https://default7235b983940447368527b8c69d3ffe.77.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/b87208e2a51c40489cbc3acd2fb8358a/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xnRomK-ltbqgaIBOYCWDNE0udC8m6551o6hACuG9CKY"

// 📱 CONFIGURACIÓN DE WHATSAPP
const WHATSAPP_NUMBER = "593980910905"
const WHATSAPP_MESSAGE =
  "¡Hola! Estoy interesado en recibir más información de los sistemas fotovoltaicos. ¿Me pueden ayudar?"

// Variables globales para elementos DOM
let elementos = {}
let datosCalculados = null
let autoSaveTimeout = null
let registroGuardado = false
const gtag = window.gtag || (() => {})

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo) {
  console.log(`Notificación (${tipo}): ${mensaje}`)
}

// 🔍 FUNCIÓN PARA ENCONTRAR SISTEMAS RECOMENDADOS (IGUAL AL TSX)
function getRecommendedSystems(consumption) {
  // Encontrar el rango correspondiente
  const matchingRange = systemsData.find((range) => consumption >= range.range[0] && consumption <= range.range[1])
  if (matchingRange) {
    // Devolver todos los sistemas sin marcar ninguno como recomendado
    return matchingRange.systems.slice(0, 3) // Máximo 3 sistemas
  } else {
    return []
  }
}

// Función para calcular área requerida
function calculateArea(panels) {
  return panels * 2.62 * 1.3
}

// 🆕 FUNCIÓN PARA CALCULAR COSTO PROGRESIVO (IGUAL AL SCRIPT ADJUNTO)
function calcularCostoProgresivo(consumo) {
  if (consumo <= 0) return 0
  if (consumo < 50) return 0

  for (let i = 0; i < TARIFAS_EXACTAS.length; i++) {
    const tramo = TARIFAS_EXACTAS[i]
    if (consumo >= tramo.desde && consumo <= tramo.hasta) {
      let costoTotal = 0
      let rangoAnterior = 0
      if (tramo.desde === 50) {
        costoTotal = consumo * tramo.tarifa
      } else if (tramo.desde === 100) {
        rangoAnterior = 50
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 150) {
        rangoAnterior = 100
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 200) {
        rangoAnterior = 150
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 250) {
        rangoAnterior = 200
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 300) {
        rangoAnterior = 250
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 350) {
        rangoAnterior = 300
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 405) {
        rangoAnterior = 350
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else {
        const consumoEnRango = consumo - tramo.desde
        costoTotal = tramo.costoBase + consumoEnRango * tramo.tarifa
      }
      return costoTotal
    }
  }
  return 0
}

// 🆕 FUNCIÓN PARA CALCULAR DATOS FTV DE UN SISTEMA
function calcularDatosFTV(sistema, consumoOriginal) {
  // Costo mensual sin sistema FTV
  const costoMensualSinSFV = calcularCostoProgresivo(consumoOriginal)

  // Nuevo consumo con sistema FTV (solo para sistemas ON GRID y HIBRIDO)
  let nuevoConsumoMensual = consumoOriginal
  let nuevoCostoMensual = costoMensualSinSFV
  let ahorroMensualReal = 0
  let ahorroAnualReal = 0

  if (sistema.type === "Sistema de ahorro energetico" || sistema.type === "Sistema de Ahorro + Respaldo") {
    // Calcular nuevo consumo restando la producción del sistema
    nuevoConsumoMensual = Math.max(0, consumoOriginal - sistema.produccionMensual)
    // Calcular nuevo costo mensual con el nuevo consumo
    nuevoCostoMensual = calcularCostoProgresivo(nuevoConsumoMensual)
    // Calcular ahorro real
    ahorroMensualReal = costoMensualSinSFV - nuevoCostoMensual
    ahorroAnualReal = ahorroMensualReal * 12
  }

  return {
    costoMensualSinSFV,
    nuevoConsumoMensual,
    nuevoCostoMensual,
    ahorroMensualReal,
    ahorroAnualReal,
  }
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarElementos()
  configurarEventListeners()
  // Initialize backup calculator dropdown
  populateEquipmentDropdown()
  // Add event listeners for backup calculator inputs
  const quantityInputs = document.querySelectorAll(".backup-quantity")
  const hoursInputs = document.querySelectorAll(".backup-hours")
  // Event delegation for dynamically added inputs
  document.addEventListener("input", (e) => {
    if (e.target.classList.contains("backup-quantity") || e.target.classList.contains("backup-hours")) {
      recalcBackup()
    }
  })
  // Add equipment button event listener
  const addEquipmentBtn = document.getElementById("addEquipmentBtn")
  if (addEquipmentBtn) {
    addEquipmentBtn.addEventListener("click", addSelectedEquipment)
  }
  // Clear backup calculator button
  const clearBackupBtn = document.getElementById("clearBackupBtn")
  if (clearBackupBtn) {
    clearBackupBtn.addEventListener("click", clearBackupCalculator)
  }
  buildSelectedEquipmentTable()
})

function inicializarElementos() {
  elementos = {
    // Formulario
    nombre: document.getElementById("nombre"),
    tipoCliente: document.getElementById("tipoCliente"),
    celular: document.getElementById("celular"),
    email: document.getElementById("email"),
    ciudad: document.getElementById("ciudad"),
    consumoMensual: document.getElementById("consumoMensual"),
    calcularBtn: document.getElementById("calcularBtn"),
    // Alertas
    errorAlert: document.getElementById("error-alert"),
    errorList: document.getElementById("error-list"),
    // Resultados
    resultados: document.getElementById("resultados"),
    clienteInfo: document.getElementById("cliente-info"),
    // Contenedores específicos por tipo
    contenedorAhorro: document.getElementById("contenedor-ahorro"),
    contenedorRespaldo: document.getElementById("contenedor-respaldo"),
    contenedorHibrido: document.getElementById("contenedor-hibrido"),
    // Tarjetas adicionales
    sistemasRecomendados: document.getElementById("sistemas-recomendados"),
    sistemasGrid: document.getElementById("sistemas-grid"),
    consumoDisplay: document.getElementById("consumo-display"),
    // Botones de acción
    whatsappBtn: document.getElementById("whatsappBtn"),
    // Modal de ayuda
    verConsumoLink: document.getElementById("verConsumoLink"),
    consumoModal: document.getElementById("consumoModal"),
    closeModal: document.getElementById("closeModal"),
    planillaImage: document.getElementById("planillaImage"),
  }
}

function configurarEventListeners() {
  elementos.calcularBtn.addEventListener("click", calcularAhorro)
  elementos.whatsappBtn.addEventListener("click", abrirWhatsApp)

  // 🚀 AUTO-GUARDADO INMEDIATO AL ESCRIBIR EL NOMBRE
  elementos.nombre.addEventListener("input", (e) => {
    const nombre = e.target.value.trim()
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout)
    }
    if (nombre.length >= 3 && !registroGuardado) {
      autoSaveTimeout = setTimeout(() => {
        guardarRegistroInmediato(nombre)
      }, 2000)
    } else if (nombre.length < 3) {
      registroGuardado = false
    }
  })

  // Modal de ayuda para consumo
  elementos.verConsumoLink.addEventListener("click", (e) => {
    e.preventDefault()
    mostrarModalConsumo()
  })

  elementos.closeModal.addEventListener("click", cerrarModalConsumo)
  elementos.consumoModal.addEventListener("click", (e) => {
    if (e.target === elementos.consumoModal) {
      cerrarModalConsumo()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && elementos.consumoModal.style.display === "block") {
      cerrarModalConsumo()
    }
  })

  elementos.planillaImage.addEventListener("click", () => {
    window.open("", "_blank")
  })

  // Enter key en campos de input
  elementos.nombre.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })
  elementos.consumoMensual.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })
  elementos.celular.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })
  elementos.email.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })
  elementos.ciudad.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })

  // Event listeners para calculadora de respaldo
  document.getElementById("backupToggleBtn").addEventListener("click", (e) => {
    e.preventDefault()
    const dropdown = document.getElementById("backupDropdown")
    const chevron = document.getElementById("backupChevron")
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block"
      chevron.classList.add("rotated")
      buildSelectedEquipmentTable()
      recalcBackup()
      // Scroll suave hacia la calculadora
      setTimeout(() => {
        dropdown.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    } else {
      dropdown.style.display = "none"
      chevron.classList.remove("rotated")
    }
  })

  document.getElementById("btnBackupClear").addEventListener("click", clearBackupCalculator)
  document.getElementById("btnBackupExport").addEventListener("click", exportBackupCSV)

  // Event listener para inputs de la calculadora de respaldo
  document.addEventListener("input", (e) => {
    if (e.target.matches(".backup-input")) {
      recalcBackup()
    }
  })

  document.getElementById("addEquipmentBtn").addEventListener("click", addSelectedEquipment)

  // Allow adding equipment with Enter key
  document.getElementById("equipmentHours").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addSelectedEquipment()
    }
  })
}

// 💾 FUNCIÓN PARA GUARDAR REGISTRO INMEDIATO
async function guardarRegistroInmediato(nombre) {
  if (registroGuardado) {
    console.log("[v0] ⚠️ Registro ya guardado, saltando...")
    return
  }

  try {
    console.log("[v0] 🔄 Iniciando guardado automático para:", nombre)

    const registroInmediato = {
      fechaCalculo: new Date().toISOString(),
      nombre: nombre,
      tipoCliente: elementos.tipoCliente.value || "No especificado",
      celular: elementos.celular.value.trim() || "593000000000",
      email: elementos.email.value.trim() || "no-email@ejemplo.com",
      ciudad: elementos.ciudad.value.trim() || "No especificado",
      consumoMensual: Number.parseInt(elementos.consumoMensual.value) || 0,
      consumoAnual: 0,
      costoMensualActual: 0.0,
      costoAnualActual: 0,
      tamanoSistema: 0,
      precioInversion: 0,
      produccionAnual: 0,
      produccionMensual: 0,
      cantidadPaneles: 0,
      areaRequerida: 0.0,
      nuevoConsumoMensual: 0,
      nuevoCostoMensual: 0.0,
      ahorroMensual: 0.0,
      ahorroAnual: 0.0,
      ahorroAnualPorcentaje: 0.0,
      tiempoRetorno: 0.0,
    }

    console.log("[v0] 📝 Registro inmediato preparado:", registroInmediato)

    const response = await fetch(POWER_AUTOMATE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(registroInmediato),
    })

    console.log("[v0] 📡 Respuesta guardado inmediato - Status:", response.status)

    if (response.ok) {
      registroGuardado = true
      console.log("[v0] ✅ LEAD CAPTURADO - Registro automático guardado:", nombre)
      gtag("event", "lead_captured", {
        event_category: "Solar Calculator",
        event_label: "Auto Save Name",
        value: 1,
      })
    } else {
      const errorText = await response.text()
      console.error(
        "[v0] ❌ Error del servidor en guardado inmediato:",
        response.status,
        response.statusText,
        errorText,
      )
      throw new Error(`Error ${response.status}: ${response.statusText} - ${errorText}`)
    }
  } catch (error) {
    console.error("[v0] ❌ Error detallado al guardar registro automático:", error)
    setTimeout(() => {
      console.log("[v0] 🔄 Reintentando guardado automático...")
      registroGuardado = false
      guardarRegistroInmediato(nombre)
    }, 3000)
  }
}

// 📱 FUNCIÓN PARA ABRIR WHATSAPP
function abrirWhatsApp() {
  const mensajeCodificado = encodeURIComponent(WHATSAPP_MESSAGE)
  const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`
  window.open(urlWhatsApp, "_blank")
  mostrarNotificacion("📱 Redirigiendo a WhatsApp...", "info")
}

// function validarCelular(celular) {
//   const regex = /^593\d{9}$/
//   return regex.test(celular)
// }

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// 🆕 NUEVA FUNCIÓN PARA MOSTRAR AHORROS O MENSAJE DE EMERGENCIA CON CÁLCULOS FTV
function getSavingsOrEmergencyMessage(sistema, consumo) {
  // Si el consumo es menor a 200 kWh y es un Power Station, mostrar mensaje especial
  if (consumo < 200 && sistema.type === "POWER STATION") {
    return `
      <div class="emergency-message">
        <div class="emergency-icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <div class="emergency-content">
          <h4>⚡ Energía de Respaldo Garantizada</h4>
          <p><strong>¡Nunca más te quedes sin energía!</strong></p>
          <ul class="emergency-benefits">
            <li>✅ <strong>Protección</strong> durante apagones</li>
            <li>✅ <strong>Energía instantánea</strong> para tus equipos esenciales</li>
            <li>✅ <strong>Portátil y fácil de usar</strong> - plug & play</li>
          </ul>
          <div class="emergency-highlight">
            <i class="fas fa-lightbulb"></i>
            <span>Inversión en seguridad energética - No genera ahorro en factura.</span>
          </div>
        </div>
      </div>
    `
  }

  // Para TODOS los sistemas OFF GRID, mostrar mensaje especial sin ahorros
  if (sistema.type.includes("Sistema de Respaldo")) {
    return `
      <div class="emergency-message off-grid">
        <div class="emergency-icon">
          <i class="fas fa-battery-full"></i>
        </div>
        <div class="emergency-content">
          <h4>Sistema de Respaldo Inteligente</h4>
          
          <ul class="emergency-benefits">
            <li>Respaldo automático durante cortes de luz</li>
            <li>Energía solar gratuita durante el día</li>
            <li>Batería de litio de larga duración</li>
            <li>Reduce dependencia de la red eléctrica</li>
            
          </ul>
          <div class="emergency-highlight">
           
            
          </div>
        </div>
      </div>
    `
  }

  // Para sistemas ON GRID y HIBRIDO, calcular y mostrar ahorros reales con FTV
  const datosFTV = calcularDatosFTV(sistema, consumo)
  return `
    <div class="sistema-savings">
      <div class="ftv-calculations" style="background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 0.375rem; padding: 0.875rem; margin-bottom: 1rem;">
        <h5 style="color: #0369a1; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">
          <i class="fas fa-calculator"></i> Cálculo con Sistema FTV
        </h5>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.8rem;">
          <div>
            <span style="color: #64748b;">Costo actual mensual:</span>
            <div style="font-weight: 600; color: #dc2626;">${formatearMoneda(datosFTV.costoMensualSinSFV)}</div>
          </div>
          <div>
            <span style="color: #64748b;">Consumo original:</span>
            <div style="font-weight: 600;">${consumo} kWh</div>
          </div>
          <div>
            <span style="color: #64748b;">Nuevo consumo:</span>
            <div style="font-weight: 600; color: #059669;">${Math.round(datosFTV.nuevoConsumoMensual)} kWh</div>
          </div>
          <div>
            <span style="color: #64748b;">Nuevo costo mensual:</span>
            <div style="font-weight: 600; color: #059669;">${formatearMoneda(datosFTV.nuevoCostoMensual)}</div>
          </div>
        </div>
      </div>
      <div class="savings-item">
        <span class="savings-label">Ahorro mensual:</span>
        <span class="savings-value">${formatearMoneda(datosFTV.ahorroMensualReal)}</span>
      </div>
      <div class="savings-item">
        <span class="savings-label">Ahorro anual:</span>
        <span class="savings-value">${formatearMoneda(datosFTV.ahorroAnualReal)}</span>
      </div>
    </div>
  `
}

// 📄 FUNCIÓN PARA GENERAR PDF INDIVIDUAL POR SISTEMA - MODIFICADA SIN FONDOS DE COLOR
function generarPDFSistema(sistema, datosCliente) {
  try {
    mostrarNotificacion("📄 Generando cotización PDF...", "info")
    // Verificar que jsPDF esté disponible
    if (typeof window.jspdf === "undefined") {
      console.error("jsPDF no está cargado")
      alert("Error: No se puede generar el PDF. Biblioteca no disponible.")
      return
    }

    const { jsPDF } = window.jspdf
    const doc = new jsPDF()

    // 🎨 FUNCIÓN MEJORADA PARA AGREGAR MARCA DE AGUA MÁS VISIBLE
    function agregarMarcaDeAguaMejorada() {
      doc.saveGraphicsState()
      // Configurar opacidad para que sea visible pero no interfiera
      doc.setGState(new doc.GState({ opacity: 0.15 }))
      // Color más oscuro para mejor visibilidad
      doc.setTextColor(100, 100, 100) // Gris más oscuro
      doc.setFontSize(45) // Tamaño más manejable
      doc.setFont("helvetica", "bold")
      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      // Múltiples marcas de agua en diferentes posiciones
      const positions = [
        { x: pageWidth * 0.3, y: pageHeight * 0.3 },
        { x: pageWidth * 0.7, y: pageHeight * 0.5 },
        { x: pageWidth * 0.5, y: pageHeight * 0.7 },
      ]
      const angle = -25 * (Math.PI / 180) // Ángulo menos pronunciado
      positions.forEach((pos) => {
        doc.text("MARRIOTT SOLUTIONS", pos.x, pos.y, {
          angle: angle,
          align: "center",
        })
      })
      doc.restoreGraphicsState()
    }

    // 🌟 FUNCIÓN ALTERNATIVA PARA MARCA DE AGUA EN EL FONDO CON PATRÓN
    function agregarMarcaDeAguaPatron() {
      doc.saveGraphicsState()
      // Opacidad muy sutil para el patrón
      doc.setGState(new doc.GState({ opacity: 0.08 }))
      doc.setTextColor(120, 120, 120)
      doc.setFontSize(20)
      doc.setFont("helvetica", "normal")
      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      // Crear patrón repetitivo
      for (let y = 30; y < pageHeight; y += 40) {
        for (let x = 20; x < pageWidth; x += 80) {
          doc.text("MARRIOTT", x, y, { angle: -15 * (Math.PI / 180) })
        }
      }
      doc.restoreGraphicsState()
    }

    const primaryColor = [255, 158, 26]
    const textColor = [55, 65, 81]

    // 🎨 APLICAR AMBAS MARCAS DE AGUA PARA MEJOR EFECTO
    agregarMarcaDeAguaPatron() // Patrón sutil de fondo
    agregarMarcaDeAguaMejorada() // Marcas principales más visibles

    // HEADER DEL PDF
    doc.setFillColor(...primaryColor)
    doc.rect(0, 0, 210, 40, "F")

    // MARRIOTT SOLUTIONS como título principal
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(20)
    doc.setFont("helvetica", "bold")
    doc.text("MARRIOTT SOLUTIONS", 105, 15, { align: "center" })
    doc.setFontSize(14)
    doc.setFont("helvetica", "normal")
    doc.text("COTIZACIÓN SISTEMA SOLAR", 105, 25, { align: "center" })
    doc.setFontSize(10)
    doc.text(`Sistema: ${sistema.name}`, 105, 32, { align: "center" })

    const fecha = new Date().toLocaleDateString("es-EC", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    doc.text(`Fecha: ${fecha}`, 105, 37, { align: "center" })

    let yPos = 55

    // 📋 INFORMACIÓN DEL CLIENTE
    doc.setTextColor(...textColor)
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.text("INFORMACIÓN DEL CLIENTE", 20, yPos)
    yPos += 10
    doc.setFontSize(11)
    doc.setFont("helvetica", "normal")
    doc.text(`Nombre: ${datosCliente.nombre}`, 20, yPos)
    doc.text(`Tipo: ${datosCliente.tipoCliente}`, 110, yPos)
    yPos += 7
    doc.text(`Celular: ${datosCliente.celular}`, 20, yPos)
    doc.text(`Ciudad: ${datosCliente.ciudad}`, 110, yPos)
    yPos += 7

    // Dividir email largo si es necesario
    const emailText = `Email: ${datosCliente.email}`
    if (emailText.length > 40) {
      doc.text("Email:", 20, yPos)
      doc.text(datosCliente.email, 20, yPos + 5)
      yPos += 5
    } else {
      doc.text(emailText, 20, yPos)
    }

    // 🔧 SISTEMA COTIZADO
    yPos += 20
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(...primaryColor)
    doc.text("SISTEMA COTIZADO", 20, yPos)
    yPos += 15
    doc.setFontSize(12)
    doc.setTextColor(...textColor)

    // Dividir descripción larga en múltiples líneas
    const descripcion = sistema.description
    const maxWidth = 170
    const lines = doc.splitTextToSize(descripcion, maxWidth)
    for (let i = 0; i < lines.length; i++) {
      doc.text(lines[i], 20, yPos + i * 6)
    }
    yPos += lines.length * 6 + 5

    doc.setFontSize(11)
    doc.text(`Tipo: ${sistema.type}`, 20, yPos)

    // Mostrar paneles o "No aplica" según el consumo
    if (sistema.panels > 0) {
      doc.text(`Paneles: ${sistema.panels} unidades`, 110, yPos)
    } else if (datosCliente.consumo > 201) {
      doc.text(`Paneles: No aplica`, 110, yPos)
    }
    yPos += 7

    // Mostrar área o "No requiere" según paneles y consumo
    if (sistema.panels > 0) {
      doc.text(`Área requerida: ${calculateArea(sistema.panels).toFixed(1)} m²`, 20, yPos)
    } else if (datosCliente.consumo > 201) {
      doc.text(`Área requerida: No requiere`, 20, yPos)
    }

    if (sistema.roi) {
      doc.text(`ROI: ${sistema.roi} años`, 110, yPos)
    }

    // 💰 PRECIOS
    yPos += 25
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(...primaryColor)
    doc.text("INVERSIÓN", 20, yPos)
    yPos += 15
    doc.setFontSize(14)
    doc.setTextColor(...textColor)
    doc.text(`Precio: ${formatearMoneda(sistema.price)}`, 20, yPos)

    if (sistema.priceWithIVA) {
      yPos += 8
      doc.text(`Precio + IVA: ${formatearMoneda(sistema.priceWithIVA)}`, 20, yPos)
    }

    // 🎯 BENEFICIOS
    yPos += 25
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(...primaryColor)
    doc.text("BENEFICIOS", 20, yPos)
    yPos += 15
    doc.setFontSize(12)
    doc.setTextColor(...textColor)

    // Verificar si es sistema de emergencia o calcular ahorros FTV
    if (sistema.type === "POWER STATION" || sistema.type === "Sistema de Respaldo") {
      doc.text("✓ Sistema de respaldo energético", 20, yPos)
      doc.text("✓ Energía limpia y renovable", 20, yPos + 6)
      doc.text("✓ Independencia energética", 20, yPos + 12)
    } else {
      const datosFTV = calcularDatosFTV(sistema, datosCliente.consumo)
      doc.text("✓ Ahorro en factura eléctrica", 20, yPos)
      doc.text(`Ahorro mensual: ${formatearMoneda(datosFTV.ahorroMensualReal)}`, 20, yPos + 6)
      doc.text(`Ahorro anual: ${formatearMoneda(datosFTV.ahorroAnualReal)}`, 20, yPos + 12)
    }

    // 📝 NOTA ADICIONAL - IGUAL AL OTRO SCRIPT
    yPos += 25
    doc.setFontSize(8)
    doc.setTextColor(...textColor)
    doc.setFont("helvetica", "normal")

    // Mensaje de nota con las especificaciones del otro script
    const mensajaNota =
      "Notas:\n• El ahorro estimado también dependerá del uso que se le dé a la batería. \n• La cantidad final de paneles será confirmada luego de un análisis gratuito realizado por nuestros expertos.\n• Las horas de respaldo estarán sujetas a la configuración de batería recomendada por nuestro equipo técnico.\n• El ahorro estimado dependerá de la correcta disposición y configuración del medidor bidireccional."

    // Dividir el mensaje en líneas si es muy largo
    const maxWidthNota = 170
    const lineasNota = doc.splitTextToSize(mensajaNota, maxWidthNota)

    // Mostrar cada línea del mensaje
    for (let i = 0; i < lineasNota.length; i++) {
      doc.text(lineasNota[i], 20, yPos + i * 6)
    }

    // Ajustar yPos según el número de líneas
    yPos += lineasNota.length * 6

    // 🎨 AGREGAR MARCA DE AGUA ADICIONAL EN LA PARTE INFERIOR
    doc.saveGraphicsState()
    doc.setGState(new doc.GState({ opacity: 0.1 }))
    doc.setTextColor(150, 150, 150)
    doc.setFontSize(60)
    doc.setFont("helvetica", "bold")
    doc.text("MARRIOTT", 105, 250, {
      angle: -45 * (Math.PI / 180),
      align: "center",
    })
    doc.restoreGraphicsState()

    // 📞 FOOTER - IGUAL AL OTRO SCRIPT
    yPos = 285
    doc.setFillColor(...primaryColor)
    doc.rect(0, yPos, 210, 17, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(10)
    doc.text("MARRIOTT SOLUTIONS - Para más información: +593 98 091 0905", 20, yPos + 10)

    // Generar nombre del archivo
    const nombreArchivo = `Cotizacion_${sistema.name.replace(/\s+/g, "_")}_${datosCliente.nombre.replace(
      /\s+/g,
      "_",
    )}_${new Date().toISOString().split("T")[0]}.pdf`

    // Descargar el PDF
    doc.save(nombreArchivo)
    console.log("✅ PDF generado exitosamente:", nombreArchivo)
    mostrarNotificacion("📄 PDF generado exitosamente", "success")
  } catch (error) {
    console.error("❌ Error al generar PDF:", error)
    alert("Error al generar el PDF. Por favor, intenta nuevamente.")
    mostrarNotificacion("❌ Error al generar PDF", "error")
  }
}

// Funciones declaradas para evitar errores de variables no declaradas
// 🧮 FUNCIÓN PRINCIPAL DE CÁLCULO
async function calcularAhorro() {
  if (!validarFormulario()) return

  const nombre = elementos.nombre.value.trim()
  const tipoCliente = elementos.tipoCliente.value
  const celular = elementos.celular.value.trim()
  const email = elementos.email.value.trim()
  const ciudad = elementos.ciudad.value.trim()
  const consumo = Number.parseFloat(elementos.consumoMensual.value)

  // 🔍 ENCONTRAR SISTEMA RECOMENDADO PRINCIPAL
  const sistemasRecomendados = getRecommendedSystems(consumo)
  const sistemaRecomendado = sistemasRecomendados[0] // El primer sistema es el principal

  if (!sistemaRecomendado) {
    alert("No se encontraron sistemas para este rango de consumo")
    return
  }

  // Cálculos básicos
  const costoMensualSinSFV = calcularCostoProgresivo(consumo)
  const consumoAnualSinSFV = consumo * 12
  const costoAnualSinSFV = costoMensualSinSFV * 12

  // Guardar datos calculados globalmente
  datosCalculados = {
    nombre,
    tipoCliente,
    celular,
    email,
    ciudad,
    consumo,
    costoMensualSinSFV,
    consumoAnualSinSFV,
    costoAnualSinSFV,
    sistema: sistemaRecomendado,
  }

  // Enviar datos a Power Automate
  await enviarDatosAPowerAutomate(datosCalculados)

  // Mostrar resultados según tipo de sistema
  mostrarResultados(datosCalculados)
}

// 🎨 FUNCIÓN PARA MOSTRAR RESULTADOS SEGÚN TIPO DE SISTEMA
function mostrarResultados(datos) {
  // Header con información del cliente
  elementos.clienteInfo.innerHTML = `
    <div style="margin-bottom: 0.5rem;">
      <strong>${datos.nombre}</strong> - Cliente ${datos.tipoCliente}
    </div>
    <div class="cliente-info-grid">
      <div class="cliente-info-item">
        <div class="cliente-info-label">Celular</div>
        <div class="cliente-info-value">${datos.celular}</div>
      </div>
      <div class="cliente-info-item">
        <div class="cliente-info-label">Email</div>
        <div class="cliente-info-value">${datos.email}</div>
      </div>
      <div class="cliente-info-item">
        <div class="cliente-info-label">Ciudad</div>
        <div class="cliente-info-value">${datos.ciudad}</div>
      </div>
    </div>
  `

  // Ocultar todos los contenedores
  elementos.contenedorAhorro.style.display = "none"
  if (elementos.contenedorRespaldo) {
    elementos.contenedorRespaldo.style.display = "none"
  }
  elementos.contenedorHibrido.style.display = "none"

  // Mostrar contenedor específico según tipo de sistema
  if (datos.sistema.type === "Sistema de ahorro energetico") {
    mostrarContenedorAhorro(datos)
  } else if (datos.sistema.type === "Sistema de Respaldo" || datos.sistema.type === "POWER STATION") {
    mostrarContenedorRespaldo(datos)
  } else if (datos.sistema.type === "Sistema de Ahorro + Respaldo") {
    mostrarContenedorHibrido(datos)
  }

  // Mostrar sistemas recomendados
  mostrarSistemasRecomendados(datos.consumo)

  // Mostrar sección de resultados
  elementos.resultados.style.display = "block"
  elementos.resultados.scrollIntoView({ behavior: "smooth", block: "start" })
}

// 🎨 FUNCIÓN PARA MOSTRAR CONTENEDOR DE AHORRO (ON GRID)
function mostrarContenedorAhorro(datos) {
  elementos.contenedorAhorro.innerHTML = ""
  elementos.contenedorAhorro.style.display = "block"
}

// 🔋 FUNCIÓN PARA MOSTRAR CONTENEDOR DE RESPALDO (OFF GRID)
function mostrarContenedorRespaldo(datos) {
  // No mostrar contenedor para sistemas de respaldo
  if (elementos.contenedorRespaldo) {
    elementos.contenedorRespaldo.style.display = "none"
  }
}

// ⚡ FUNCIÓN PARA MOSTRAR CONTENEDOR HÍBRIDO
function mostrarContenedorHibrido(datos) {
  elementos.contenedorHibrido.innerHTML = ""
  elementos.contenedorHibrido.style.display = "block"
}

// 🏷️ FUNCIÓN PARA MOSTRAR SISTEMAS RECOMENDADOS (MODIFICADA)
function mostrarSistemasRecomendados(consumo) {
  // Obtener sistemas usando la misma lógica del TSX
  const sistemasRecomendados = getRecommendedSystems(consumo)

  function getBadgeClass(tipo) {
    switch (tipo) {
      case "ON GRID":
        return "badge-on-grid"
      case "OFF GRID":
        return "badge-off-grid"
      case "Sistema de Ahorro + Respaldo":
        return "badge-hibrido"
      case "Sistema de Respaldo":
        return "badge-power-station"
      default:
        return "badge-on-grid"
    }
  }

  function calcularConsumoYAhorro(sistema, consumoActual) {
    const generacionMensual = sistema.produccionMensual || 0

    // El consumo nuevo es el consumo actual menos la generación (mínimo 0)
    const consumoNuevo = Math.max(0, consumoActual - generacionMensual)
    const ahorro = consumoActual - consumoNuevo

    const precioPorKWh = 3.5 // Precio promedio por kWh en México
    const costoActual = consumoActual * precioPorKWh
    const costoNuevo = consumoNuevo * precioPorKWh

    return {
      consumoActual: consumoActual,
      consumoNuevo: consumoNuevo,
      ahorro: ahorro,
      costoActual: costoActual,
      costoNuevo: costoNuevo,
    }
  }

  console.log(`🔍 Para consumo ${consumo} kWh, sistemas encontrados:`, sistemasRecomendados)

  if (sistemasRecomendados.length === 0) {
    elementos.sistemasGrid.innerHTML = `
      <div class="sistema-card">
        <div class="sistema-card-header">
          <div class="sistema-type-badge badge-power-station">
            <i class="fas fa-tools"></i>
            PERSONALIZADO
          </div>
          <h3 class="sistema-title">Sistema Personalizado Requerido</h3>
        </div>
        <div class="sistema-card-content">
          <div class="sistema-specs">
            <div class="spec-item">
              <span class="spec-label">Tu Consumo:</span>
              <span class="spec-value">${consumo} kWh</span>
            </div>
          </div>
          <div class="emergency-message">
            <div class="emergency-content">
              <p>Tu consumo de <strong>${consumo} kWh</strong> requiere un sistema personalizado.</p>
              <p>Contacta a nuestro equipo para una solución a medida.</p>
            </div>
          </div>
          <button class="btn-cotizar" onclick="abrirWhatsApp()">
            <i class="fab fa-whatsapp"></i>
            Contactar Expertos
          </button>
        </div>
      </div>
    `
    elementos.sistemasRecomendados.style.display = "block"
    return
  }

  elementos.sistemasGrid.innerHTML = sistemasRecomendados
    .map((sistema) => {
      const datos = calcularConsumoYAhorro(sistema, consumo)
      return `
        <div class="sistema-card">
          <div class="sistema-card-header">
            <div class="sistema-type-badge ${getBadgeClass(sistema.type)}">
              <i class="fas fa-solar-panel"></i>
              ${sistema.type}
            </div>
            <h3 class="sistema-title">${sistema.description}</h3>
          </div>
          <div class="sistema-card-content">
            ${
              sistema.img
                ? `
              <div class="sistema-image-section">
                <div class="sistema-image-container" onclick="abrirModalImagen('${sistema.img}', '${sistema.name}')">
                  <img src="${sistema.img}" alt="${sistema.name}" class="sistema-image">
                  <div class="image-overlay">
                    <i class="fas fa-search-plus"></i>
                    <span>Ver imagen</span>
                  </div>
                </div>
              </div>
            `
                : ""
            }
            <div class="sistema-specs">
              <div class="spec-item">
                <span class="spec-label">Área requerida:</span>
                <span class="spec-value">${sistema.panels > 0 ? calculateArea(sistema.panels).toFixed(1) + " m²" : "No requiere"}</span>
              </div>
            </div>
            ${
              sistema.type === "Sistema de ahorro energetico" || sistema.type === "Sistema de Ahorro + Respaldo"
                ? `
              <div class="operacion-matematica" style="margin: 15px 0; padding: 10px; background-color: #f8f9fa; border-radius: 5px;">
                <div class="operacion-texto" style="margin-bottom: 5px;"><strong>Consumo actual:</strong> ${datos.consumoActual.toFixed(0)} kWh/mes</div>
                <div class="operacion-texto" style="margin-bottom: 5px;"><strong>Consumo nuevo:</strong> ${datos.consumoNuevo.toFixed(0)} kWh/mes</div>
                <hr style="margin: 8px 0; border: 1px solid #ddd;">
                <div class="operacion-texto" style="margin-bottom: 10px; color: #28a745;"><strong>Ahorro:</strong> ${datos.ahorro.toFixed(0)} kWh/mes</div>
                
                <div class="operacion-texto" style="margin-bottom: 5px;"><strong>Costo actual:</strong> $${datos.costoActual.toFixed(0)} /mes</div>
                <div class="operacion-texto" style="margin-bottom: 5px;"><strong>Costo nuevo:</strong> $${datos.costoNuevo.toFixed(0)} /mes</div>
                <hr style="margin: 8px 0; border: 1px solid #ddd;">
                <div class="operacion-texto" style="color: #28a745;"><strong>Ahorro económico:</strong> $${(datos.costoActual - datos.costoNuevo).toFixed(0)} /mes</div>
              </div>
            `
                : ""
            }
            ${
              sistema.type === "Sistema de Respaldo"
                ? `
              <div class="emergency-message off-grid">
                <div class="emergency-icon">
                  <i class="fas fa-battery-full"></i>
                </div>
                <div class="emergency-content">
                  <h4>Sistema de Respaldo Inteligente</h4>
                    <p>Respaldo automático durante cortes de luz</p>
                    <p>Energía solar gratuita durante el día</p>
                    <p>Batería de litio de larga duración</p>
                    <p>Reduce dependencia de la red eléctrica</p>
                    <br><br><br><br>
                  
                </div>
              </div>
            `
                : ""
            }
            ${
              sistema.type === "POWER STATION"
                ? `
              <div class="emergency-message off-grid">
                <div class="emergency-icon">
                  <i class="fas fa-battery-full"></i>
                </div>
                <div class="emergency-content">
                  <h4>Sistema de Respaldo Inteligente</h4>
                    <p>Respaldo automático durante cortes de luz</p>
                    <p>Energía solar gratuita durante el día</p>
                    <p>Batería de litio de larga duración</p>
                    <p>Reduce dependencia de la red eléctrica</p>
                    <br><br><br>
                  
                </div>
              </div>
            `
                : ""
            }
            <div class="sistema-price">
              <div class="price-item">
                <span class="price-label">Inversión (Incluye instalación):</span>
                <span class="price-value price-inversion">${formatearMoneda(sistema.price)}</span>
              </div>
            </div>
            <button class="btn-cotizar" onclick="generarPDFSistema(${JSON.stringify(sistema).replace(/"/g, "&quot;")}, datosCalculados)">
              <i class="fas fa-file-pdf"></i>
              Generar Cotización PDF
            </button>
          </div>
        </div>
      `
    })
    .join("")

  elementos.sistemasRecomendados.style.display = "block"
}

//  Agregando funciones para el modal de imagen de productos
function abrirModalImagen(imagenUrl, nombreSistema) {
  const modal = document.getElementById("modalImagen")
  const modalImg = document.getElementById("imagenModal")
  const caption = document.getElementById("captionModal")

  modal.style.display = "block"
  modalImg.src = imagenUrl
  caption.textContent = nombreSistema

  // Prevenir scroll del body cuando el modal está abierto
  document.body.style.overflow = "hidden"
}

function cerrarModalImagen() {
  const modal = document.getElementById("modalImagen")
  modal.style.display = "none"

  // Restaurar scroll del body
  document.body.style.overflow = "auto"
}

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = (event) => {
  const modal = document.getElementById("modalImagen")
  if (event.target === modal) {
    cerrarModalImagen()
  }
}

// Funciones auxiliares para formatear moneda y validar el formulario
function formatearMoneda(valor) {
  return new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(valor)
}

function validarFormulario() {
  const errores = []

  if (!elementos.nombre.value.trim()) {
    errores.push("Por favor, ingresa tu nombre.")
  }

  if (!elementos.celular.value.trim()) {
    errores.push("Por favor, ingresa tu número de celular.")
  }

  if (!validarEmail(elementos.email.value.trim())) {
    errores.push("Por favor, ingresa un email válido.")
  }

  if (!elementos.ciudad.value.trim()) {
    errores.push("Por favor, ingresa tu ciudad.")
  }

  if (!elementos.consumoMensual.value.trim()) {
    errores.push("Por favor, ingresa tu consumo mensual de energía.")
  }

  if (errores.length > 0) {
    mostrarAlertas(errores)
    return false
  }

  return true
}

function mostrarAlertas(errores) {
  elementos.errorList.innerHTML = ""
  errores.forEach((error) => {
    const li = document.createElement("li")
    li.textContent = error
    elementos.errorList.appendChild(li)
  })
  elementos.errorAlert.style.display = "block"
  setTimeout(() => {
    elementos.errorAlert.style.display = "none"
  }, 5000)
}

async function enviarDatosAPowerAutomate(datos) {
  try {
    console.log("[v0] 🔍 Iniciando envío a Power Automate...")
    console.log("[v0] 📊 Datos recibidos:", datos)

    const registro = {
      fechaCalculo: new Date().toISOString(),
      nombre: String(datos.nombre || ""),
      tipoCliente: String(datos.tipoCliente || ""),
      celular: String(datos.celular || ""),
      email: String(datos.email || ""),
      ciudad: String(datos.ciudad || ""),
      consumoMensual: Number.parseInt(datos.consumo) || 0,
      consumoAnual: Number.parseInt(datos.consumoAnualSinSFV) || 0,
      costoMensualActual: Number.parseFloat(datos.costoMensualSinSFV) || 0,
      costoAnualActual: Number.parseInt(datos.costoAnualSinSFV) || 0, // Cambiado a integer
      tamanoSistema: Number.parseFloat(datos.sistema.power) || 0, // Cambiado a number (kW del sistema)
      precioInversion: Number.parseInt(datos.sistema.price) || 0, // Cambiado a integer
      produccionAnual: Number.parseInt(datos.sistema.produccionAnual) || 0,
      produccionMensual: Number.parseInt(datos.sistema.produccionMensual) || 0,
      cantidadPaneles: Number.parseInt(datos.sistema.panels) || 0,
      areaRequerida: Number.parseFloat(calculateArea(datos.sistema.panels)) || 0,
      nuevoConsumoMensual: Number.parseInt(0),
      nuevoCostoMensual: Number.parseFloat(0),
      ahorroMensual: Number.parseFloat(0),
      ahorroAnual: Number.parseFloat(0),
      ahorroAnualPorcentaje: Number.parseFloat(0),
      tiempoRetorno: Number.parseFloat(0),
    }

    console.log("[v0] 📝 Registro preparado con tipos corregidos:", registro)
    console.log("[v0] 🌐 URL de Power Automate:", POWER_AUTOMATE_URL)

    const response = await fetch(POWER_AUTOMATE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(registro),
    })

    console.log("[v0] 📡 Respuesta del servidor - Status:", response.status)
    console.log("[v0] 📡 Respuesta del servidor - StatusText:", response.statusText)

    if (response.ok) {
      console.log("[v0] ✅ Datos enviados correctamente a Power Automate")
      mostrarNotificacion("✅ Datos guardados correctamente en SharePoint", "success")
      gtag("event", "form_submission", {
        event_category: "Solar Calculator",
        event_label: "Form Submission",
        value: 1,
      })
    } else {
      const errorText = await response.text()
      console.error("[v0] ❌ Error del servidor:", response.status, response.statusText, errorText)
      mostrarNotificacion(`❌ Error del servidor: ${response.status} - ${response.statusText}`, "error")
      throw new Error(`Error ${response.status}: ${response.statusText} - ${errorText}`)
    }
  } catch (error) {
    console.error("[v0] ❌ Error detallado al enviar datos a Power Automate:", error)
    console.error("[v0] 🔍 Tipo de error:", error.name)
    console.error("[v0] 🔍 Mensaje de error:", error.message)

    if (error.name === "TypeError" && error.message.includes("fetch")) {
      mostrarNotificacion("❌ Error de conexión. Verifica tu conexión a internet.", "error")
    } else if (error.name === "TypeError" && error.message.includes("CORS")) {
      mostrarNotificacion("❌ Error de CORS. La URL de Power Automate puede necesitar actualización.", "error")
    } else {
      mostrarNotificacion("❌ Error al enviar datos. Revisa la consola para más detalles.", "error")
    }
  }
}

// This function is already defined above, so it should not be redeclared.
// async function guardarRegistroInmediato(nombre) {
//   if (registroGuardado) {
//     console.log("[v0] ⚠️ Registro ya guardado, saltando...")
//     return
//   }

//   try {
//     console.log("[v0] 🔄 Iniciando guardado automático para:", nombre)

//     const registroInmediato = {
//       fechaCalculo: new Date().toISOString(),
//       nombre: nombre,
//       tipoCliente: elementos.tipoCliente.value || "No especificado",
//       celular: elementos.celular.value.trim() || "593000000000",
//       email: elementos.email.value.trim() || "no-email@ejemplo.com",
//       ciudad: elementos.ciudad.value.trim() || "No especificado",
//       consumoMensual: Number.parseInt(elementos.consumoMensual.value) || 0,
//       consumoAnual: 0,
//       costoMensualActual: 0.0,
//       costoAnualActual: 0,
//       tamanoSistema: 0,
//       precioInversion: 0,
//       produccionAnual: 0,
//       produccionMensual: 0,
//       cantidadPaneles: 0,
//       areaRequerida: 0.0,
//       nuevoConsumoMensual: 0,
//       nuevoCostoMensual: 0.0,
//       ahorroMensual: 0.0,
//       ahorroAnual: 0.0,
//       ahorroAnualPorcentaje: 0.0,
//       tiempoRetorno: 0.0,
//     }

//     console.log("[v0] 📝 Registro inmediato preparado:", registroInmediato)

//     const response = await fetch(POWER_AUTOMATE_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(registroInmediato),
//     })

//     console.log("[v0] 📡 Respuesta guardado inmediato - Status:", response.status)

//     if (response.ok) {
//       registroGuardado = true
//       console.log("[v0] ✅ LEAD CAPTURADO - Registro automático guardado:", nombre)
//       gtag("event", "lead_captured", {
//         event_category: "Solar Calculator",
//         event_label: "Auto Save Name",
//         value: 1,
//       })
//     } else {
//       const errorText = await response.text()
//       console.error("[v0] ❌ Error del servidor en guardado inmediato:", response.status, response.statusText, errorText)
//       throw new Error(`Error ${response.status}: ${response.statusText} - ${errorText}`)
//     }
//   } catch (error) {
//     console.error("[v0] ❌ Error detallado al guardar registro automático:", error)
//     setTimeout(() => {
//       console.log("[v0] 🔄 Reintentando guardado automático...")
//       registroGuardado = false
//       guardarRegistroInmediato(nombre)
//     }, 3000)
//   }
// }

function mostrarModalConsumo() {
  elementos.consumoModal.style.display = "block"
  document.body.style.overflow = "hidden"
}

function cerrarModalConsumo() {
  elementos.consumoModal.style.display = "none"
  document.body.style.overflow = "auto"
}
