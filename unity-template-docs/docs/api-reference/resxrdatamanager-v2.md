---
title: "ResXRDataManager_V2"
---
# ResXRDataManager_V2

**Location**: `Assets/ResXR/Base Scene/ResXRDataManager_V2/`  
**Purpose**: data collection + export.

## What it does
- Builds CSV schemas
- Runs collectors each FixedUpdate
- Writes CSV rows + metadata json
- Supports custom event tables (data classes)

## You usually do NOT edit core code
You interact by:
- Adding custom data classes (events)
- Adding reporter functions
- Assigning custom transforms in Inspector

## Outputs
- ContinuousData.csv
- FaceExpressions.csv
- Custom event CSVs
- session_metadata.json (designed for later Motion-BIDS export via Python pipeline)
