---
id: module-4-vla
title: "Module 4: Vision-Language-Action (VLA)"
sidebar_label: "Module 4: VLA & Capstone"
sidebar_position: 5
---

# Module 4: Vision-Language-Action (VLA)

## Overview

We have built a robot that moves (ROS 2), lives in a simulation (Gazebo), and sees the world (Isaac Sim). Now, we give it the ability to **understand**.

**Vision-Language-Action (VLA)** models represent the convergence of Generative AI and Robotics. [cite_start]Instead of writing hard-coded scripts for every task, we use Large Language Models (LLMs) to translate natural human instructions into physical robotic actions[cite: 68, 69].

In this module, you will build a "Voice-to-Action" pipeline using **OpenAI Whisper** and **GPT-4**, culminating in the final Capstone Project.

---

## 1. The VLA Pipeline: From Speech to Motion

Traditional robots need explicit code like `move_forward(10)`. VLA robots understand intent like "Go get me a snack."

The pipeline consists of three stages:
1.  **The Ear:** Converting voice audio into text.
2.  **The Brain (Cognitive Planner):** Reasoning about the text to create a plan.
3.  [cite_start]**The Body:** Executing the plan using ROS 2 actions[cite: 70, 71].



### The Architecture

The following diagram illustrates how an LLM acts as the "High-Level Commander" for the ROS 2 system:

```mermaid
graph TD
    A[🎤 User Voice Command] -->|OpenAI Whisper| B[📝 Text Prompt]
    B -->|Context + Prompt| C[🧠 LLM Agent (GPT-4)]
    C -->|JSON Action Plan| D[ROS 2 Orchestrator]
    D -->|/navigate_to| E[Nav2 Stack]
    D -->|/manipulate| F[Robotic Arm Controller]
    E --> G[🤖 Robot Hardware]
    F --> G