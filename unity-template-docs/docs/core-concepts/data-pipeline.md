---
title: "Data Pipeline"
---
# Data Pipeline

## Overview
ResXRDataManager_V2 records:
- Continuous tracking data (FixedUpdate) → `ContinuousData.csv`
- Face expressions (FixedUpdate) → `FaceExpressions.csv`
- Custom event tables (on-demand) → `*.csv` per event type
- Session metadata → `session_metadata.json`

## Under the hood (high-level)
Collectors → RowBuffer → CsvRowWriter → CSV files

## Custom events
You add:
1) Custom data classes (public fields)
2) Reporter functions that write the class via `CustomCsvFromDataClass.Write(...)`

## Custom transforms
You can assign transforms in the DataManager inspector to be recorded continuously.
They appear as additional columns in ContinuousData.csv.

## Frequency
Continuous streams log once per FixedUpdate.
Default fixed timestep is controlled by Unity Project Settings (Time → Fixed Timestep).
(Custom events are written when you call their reporter function, not tied to FixedUpdate.)
