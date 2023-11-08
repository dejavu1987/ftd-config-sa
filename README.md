# FreeTouchDeck Configurator (FTD Configurator)
<img src="https://res.cloudinary.com/anilmaharjan-com-np/image/upload/v1699444768/Blog/FTD-cfg.svg" width="400"/>


## Overview

The Standalone FreeTouchDeck Configurator / FTD-Config-SD, is a stand-alone application designed to simplify the configuration of [FreeTouchDeck (FTD)](https://github.com/DustinWatts/FreeTouchDeck) on ESP32-based boards. This repository hosts the code for the FTD Configurator app.

<img src="https://res.cloudinary.com/anilmaharjan-com-np/image/upload/t_scale800/v1699444768/Blog/ftd-menu.png" width="400"/>

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Easy Configuration:** The FTD Configurator simplifies the process of configuring FTD settings on ESP32 boards.
- **Decoupled from MCU Application:** With the stand-alone configurator, you no longer need to upload configuration files to the ESP32, simplifying the configuration process.
- **Offloads Static Files:** Hosting the configurator separately reduces the resource load on the ESP32 device by moving static files to the separate app.
- **Consistency:** Helps ensure that the configurator and FTD core remain in sync.

| Feature                    | Progress |
|---------------------------  |--------- |
| Icon management            | ████████████ 90% |
| General and Wifi Settings  | █████████████ 95% |
| Menu management            | ███████████ 85% |

## Tech Stack

The FreeTouchDeck Configurator is built using the following technologies:

- **Vite:** A fast build tool and development server for web projects.
- **React:** A popular JavaScript library for building user interfaces.
- **TypeScript:** A statically-typed superset of JavaScript for improved code quality.
- **ESLint:** A pluggable and configurable linter for identifying and fixing code style issues.

## Installation

To set up the FreeTouchDeck Configurator, follow these steps:

**Clone the Repository:**

```shell
git clone https://github.com/dejavu1987/ftd-config-sa.git
```

### Install Dependencies:

```shell
cd ftd-config-sa
yarn
```

### Start the Configurator:

```shell
yarn dev
```

## Access the Configurator:

Open a web browser and go to http://localhost:5173/ to access the FTD Configurator.

### Usage

The FreeTouchDeck Configurator provides a user-friendly web interface for configuring FTD settings on ESP32 boards. You can use it to:

1. Customize button layouts, functions, and icons.
2. Configure network settings.
3. Save and load configurations.
4. Sync the configuration with your ESP32 device.

For detailed usage instructions, please refer to the [User Guide](/docs/user-guide.md).

### Contributing

We welcome contributions from the community. If you would like to contribute to the FreeTouchDeck Configurator project, please follow these guidelines:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

For more details, please review our [Contributing Guidelines](/CONTRIBUTING.md).

### License

This project is licensed under the [MIT License](/LICENSE). You are free to use, modify, and distribute this software as long as you respect the terms of the license.

For questions, issues, or feature requests, please open an issue in this repository.
