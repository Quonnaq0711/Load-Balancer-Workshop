# Load Balancer Workshop Demo

## Overview
This repo contains a simple demo to simulate load balancing using Node.js, Express, and `http-proxy`.

## Getting Started

### Install dependencies:
npm install

### Run servers:
npm run start:servers

### Start load balancer:
npm run start:balancer

### Fire requests:
npm run run:client

## Concept:
- Load balancer listens on `localhost:8000`
- Routes traffic to three backend servers (round robin)
- Observe request distribution in terminal

# Load-Balancer-Workshop
