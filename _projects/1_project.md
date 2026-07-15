---
layout: page
title: Light My Cells
description: Dockerized self-supervised Vision Transformers for fluorescence prediction from label-free microscopy.
img:
importance: 1
category: research
related_publications: true
---

**Light My Cells** tackles a hard image-to-image translation problem: predicting
fluorescence-stained cell structures directly from **label-free** (transmitted-light)
microscopy, avoiding slow and phototoxic staining protocols.

## What I built

- Designed and trained **self-supervised Vision Transformer (ViT)** models for the
  image-to-image labeling task, built on top of the
  [BiaPy](https://biapyx.github.io/) framework.
- Took ownership of the full **MLOps lifecycle**: containerized the entire pipeline
  with **Docker**, with clear dependency management and automated inference scripts for
  effectively "one-click" deployment.
- Focused on **reproducibility** so the model runs reliably outside the lab where it was
  developed.

## Impact

The result is a standalone, production-ready tool that bridges the gap between research
and engineering. The underlying approach was presented at **IEEE ISBI 2024** as part of
the LightMyCells Challenge {% cite franco2024lightmycells %}.
