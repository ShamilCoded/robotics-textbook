---
id: module-2-digital-twin
title: "Module 2: The Digital Twin (Gazebo & Unity)"
sidebar_label: "Module 2: Digital Twins"
sidebar_position: 3
---

# Module 2: The Digital Twin (Gazebo & Unity)

## Overview

A **Digital Twin** is a virtual replica of a physical system. in Robotics, it allows us to crash a million-dollar robot a thousand times without costing a penny.

This module focuses on **Simulation**. You will learn how to use **Gazebo** for accurate physics (gravity, friction, collisions) and **Unity** for high-fidelity visual rendering and human-robot interaction.

---

## 1. Gazebo: The Physics Engine

Gazebo is the industry standard for simulating robotic physics. It solves the equations of motion for rigid bodies, ensuring that when your robot walks, it has to fight gravity just like in the real world.

### Rigid Body Dynamics

Gazebo calculates how forces affect objects using physics engines like **ODE (Open Dynamics Engine)** or **Bullet**.

* **Gravity:** Constant downward force ($9.81 m/s^2$).
* **Collision:** Detecting when two meshes touch and calculating the "bounce" or friction response.
* **Inertia:** How hard it is to rotate an object (defined in the URDF).

### The Simulation Loop

Every millisecond, the simulator performs a cycle. The following diagram shows how the "Digital Twin" interacts with your code:

```mermaid
graph TD
    A[Physics Step] -->|Calculate Forces| B[Update Object Positions]
    B -->|Raycasting| C[Generate Sensor Data]
    C -->|Publish Topics| D[ROS 2 Node]
    D -->|Calculate Control| E[Send Motor Command]
    E -->|Apply Torque| A