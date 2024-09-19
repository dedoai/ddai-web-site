
# ddai-web-site

![Hugo](https://img.shields.io/badge/Hugo-0.XX-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-orange)
![License](https://img.shields.io/badge/License-MIT-green)

**dedoAI** - Official Website

---

## Overview

The official website for **dedoAI**, accessible at [www.dedoai.org](https://www.dedoai.org), showcases our vision for a secure, decentralized, and transparent data exchange, aimed at empowering the new AI-driven economy.

---

### Homepage Description:

**"Redefining Data Ownership for the AI Era:**
Secure, Decentralized and Transparent Data Exchange for a New AI Economy  
Transforming Data with Blockchain: Secure, Accessible, and Creator-Owned."

The website presents:

- **Our Project**: An overview of the dedoAI platform and mission.
- **The Litepaper**: Key insights and technical details about the project.
- **The Team**: Meet the experts and innovators behind dedoAI.

---

## Technologies Used

- **[Hugo](https://gohugo.io/)**: A fast and flexible static site generator.
- **Bootstrap.js**: Used for responsive design to ensure a seamless experience across all devices.

---

## Features

- **Responsive Design**: Leveraging Bootstrap to ensure the site is mobile-friendly.
- **Static Site Generation**: Built with Hugo, ensuring fast load times and easy deployment.
- **SEO Optimized**: Configured with best practices for search engine optimization.

---

## Getting Started

### Prerequisites

To run the website locally or contribute, you need the following:

- **Hugo**: The static site generator used for the project.
  Install Hugo by following the [official instructions](https://gohugo.io/getting-started/installing/).
- **Node.js** (Optional): For managing dependencies like Bootstrap (if you're making changes to the frontend).

### Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/dedoAI/ddai-web-site.git
    cd ddai-web-site
    ```

2. Install the required dependencies:

    If you're planning to make changes to the frontend (Bootstrap or JavaScript):

    ```bash
    npm install
    ```

3. Run the site locally:

    ```bash
    hugo server -D
    ```

    You can now view the site at `http://localhost:1313`.

---

## Project Structure

- **/content**: Markdown files that define the site content (project overview, litepaper, team info, etc.).
- **/layouts**: Hugo templates for rendering pages.
- **/static**: Static assets such as images, CSS, and JavaScript.
- **/themes**: The theme used for the website, with Bootstrap integrated for responsive design.

---

## Customization

### Bootstrap Integration

The website uses **Bootstrap 5** for its responsive layout and components. Any custom styles are defined in the `static/css` directory, and the Bootstrap files can be updated or modified as needed via the `node_modules/bootstrap/` folder.

To rebuild the CSS or JavaScript files:

```bash
npm run build
```

---

## Deployment

To deploy the website, you can use various methods like static hosting services or a CI/CD pipeline:

1. Generate the static files using Hugo:

    ```bash
    hugo
    ```

    This will create a `public/` directory containing the static files.

2. Deploy the `public/` directory to your hosting service (e.g., AWS S3, Netlify, GitHub Pages, etc.).

---

## Contributing

We welcome contributions from the community! To contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For more information about dedoAI or to get in touch with the team:

- **Website**: [dedo.org](https://www.dedo.org)
- **Email**: support@dedo.org
