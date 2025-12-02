---
id: module-1-ros2
title: "Module 1: The Robotic Nervous System (ROS 2)"
sidebar_label: "Module 1: ROS 2 Fundamentals"
sidebar_position: 2
---

# Module 1: The Robotic Nervous System (ROS 2)

## Overview

If AI agents are the "brain," then the **Robot Operating System (ROS 2)** is the "nervous system." It provides the essential communication layer that allows software (intelligence) to talk to hardware (motors and sensors).

In this module, we explore the middleware that powers modern robotics. You will learn how to structure robotic software using **Nodes**, facilitate communication via **Topics** and **Services**, and define the robot's physical body using **URDF**.

---

## 1. ROS 2 Architecture: Nodes, Topics, and Services

ROS 2 is not a traditional operating system like Windows or Linux; it is a **middleware framework**. It manages the flow of data between different independent processes.

### Nodes: The Processing Units

A **Node** is a single executable process that performs a specific computation. A robot is made up of many nodes:
* **Camera Node:** Publishes images.
* **Path Planning Node:** Calculates where to go.
* **Motor Controller Node:** Sends current to the wheels/joints.

### Topics: Asynchronous Communication

Nodes communicate by passing messages over **Topics**. This is a **Publish-Subscribe (Pub/Sub)** model:
* **Publishers** send data *out* (e.g., "I see an obstacle").
* **Subscribers** listen *in* (e.g., "I need to know if there is an obstacle").

### Services: Synchronous Communication

While Topics are a continuous stream of data, **Services** are for "Call and Response."
* **Client:** Sends a request (e.g., "Turn on the light").
* **Server:** Performs the action and sends a reply (e.g., "Light is ON").

### Visualizing the Graph

The following diagram shows how a "Perception Node" talks to a "Control Node":

```mermaid
graph LR
    A[Camera Node] --/image_raw--> T((Topic: Images))
    T --> B[Vision Processing Node]
    B --/cmd_vel--> U((Topic: Velocity))
    U --> C[Motor Controller Node]
    D[User Interface] -.->|Service Call: Reset| C
