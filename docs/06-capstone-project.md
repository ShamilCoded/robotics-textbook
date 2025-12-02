---
id: capstone-project
title: "Capstone Project: The Autonomous Humanoid"
sidebar_label: "🎓 Capstone Project"
sidebar_position: 6
---

# Capstone Project: The Autonomous Humanoid

## Overview

The **Capstone Project** is the culmination of the entire Physical AI & Humanoid Robotics course. It integrates every skill you have learned—ROS 2 middleware, physics simulation, computer vision, and cognitive planning with LLMs—into a single, functional autonomous system.

[cite_start]Your mission is to build a **simulated humanoid robot** that can receive a vague natural language command, plan a complex task, navigate a dynamic environment, and manipulate objects to achieve a goal[cite: 72].

---

## 1. The Mission: "Sim-to-Real" Butler

You are placing your robot in a simulated home environment (kitchen/living room). The robot must successfully execute a "fetch and carry" task initiated by voice.

### The Scenario
1.  [cite_start]**The Command:** You speak to the robot: *"I'm thirsty. Go get me a drink from the kitchen table."*[cite: 71, 72].
2.  **The Environment:** A Gazebo/Isaac Sim world containing:
    * Obstacles (chairs, tables).
    * Target Objects (red soda can, blue water bottle).
    * Distractor Objects (books, keys).
3.  [cite_start]**The Goal:** The robot must identify "drink" as a target, find it, pick it up, and return to the starting position without colliding with anything[cite: 72].

---

## 2. Technical Requirements

Your project must demonstrate integration of the following four core modules:

### A. The Nervous System (ROS 2)
* [cite_start]**Custom Nodes:** You must write at least 3 custom Python nodes (Ear, Brain, Body)[cite: 53, 56].
* [cite_start]**Topics & Services:** Use topics for continuous data (camera feeds) and services for discrete actions (grasping)[cite: 55].
* **Launch Files:** The entire robot must start with a single command: `ros2 launch capstone_bringup robot.launch.py`.

### B. The Body (Simulation)
* [cite_start]**URDF/SDF:** A custom or modified humanoid robot description with accurate physics (mass, inertia)[cite: 57, 96].
* [cite_start]**Sensors:** The robot must possess a functional RGB-D camera and LiDAR in simulation[cite: 62].

### C. The Eyes (Perception)
* [cite_start]**Object Detection:** Use **YOLO** or **Isaac ROS** to identify the "soda can"[cite: 66, 72].
* [cite_start]**VSLAM:** The robot must build a map of the room and localize itself within it[cite: 66].

### D. The Brain (VLA)
* [cite_start]**Voice Interface:** Use **OpenAI Whisper** to transcribe the user's voice command[cite: 70].
* [cite_start]**Planner:** Use an LLM (GPT-4o or local Llama 3) to decompose the command into steps[cite: 71].
* [cite_start]**Navigation:** Use **Nav2** to generate the path and avoid obstacles[cite: 67].

---

## 3. Implementation Plan

### Phase 1: The Digital Twin (Weeks 1-4)
* Set up the Gazebo/Isaac Sim environment.
* Import the humanoid URDF.
* Verify that the robot can stand and walk in simulation without falling.

### Phase 2: Perception & Navigation (Weeks 5-8)
* Implement SLAM to map the virtual kitchen.
* Tune Nav2 parameters so the robot can walk from the Living Room to the Kitchen autonomously.
* Test object detection on the soda can.

### Phase 3: The VLA Stack (Weeks 9-12)
* Connect the Microphone to the Whisper Node.
* Connect the LLM to the ROS 2 Action Server.
* **Integration Test:** Ensure the voice command triggers the correct navigation goal.

---

## 4. Hardware Recommendations

[cite_start]Because this is a computationally heavy project involving physics, rendering, and AI simultaneously, the following hardware is recommended for development[cite: 119, 120]:

| Component | Specification | Reason |
| :--- | :--- | :--- |
| **GPU** | NVIDIA RTX 4070 Ti (12GB VRAM) or higher | [cite_start]Required for Isaac Sim ray-tracing and VLA model inference[cite: 125, 126]. |
| **CPU** | Intel Core i7 (13th Gen) or AMD Ryzen 9 | [cite_start]Rigid body physics calculations are CPU-intensive[cite: 128, 129]. |
| **RAM** | 64 GB DDR5 | 32 GB is the absolute minimum; [cite_start]64 GB prevents crashes during rendering[cite: 130]. |
| **OS** | Ubuntu 22.04 LTS | [cite_start]ROS 2 (Humble/Iron) is native to Linux[cite: 131, 132]. |

---

## 5. Grading Criteria

The project is worth 100 points, broken down as follows:

* **Functionality (40 points):** Does the robot successfully fetch the object?
* **Autonomy (30 points):** Does it recover from collisions? Can it handle dynamic obstacles (e.g., a moving chair)?
* **Code Quality (20 points):** Is the code modular, documented, and following ROS 2 best practices?
* **Sim-to-Real Viability (10 points):** Is the architecture designed in a way that allows deployment to a real robot (e.g., Unitree G1) with minimal changes?

:::danger
**Critical Failure Condition:**
If the robot's simulation runs at less than 10 FPS (Real-Time Factor < 0.3), the project will be penalized. Physical AI requires real-time responsiveness!
:::