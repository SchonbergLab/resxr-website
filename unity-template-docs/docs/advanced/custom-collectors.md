---
title: "Custom collectors"
---
# Custom collectors

ResXRDataManager_V2 uses collectors to fill RowBuffer per tick.

If you need a new continuous stream:
1. Create a new collector class in:
   `Assets/ResXR/Base Scene/ResXRDataManager_V2/Collectors/`
2. Add schema columns in SchemaBuilder
3. Register the collector in DataManager init
4. Fill row values in Collect()

Keep it simple and consistent with existing collectors.
