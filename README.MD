![Main LOGO](assets/imgs/banner-right.webp)

# Victor Garcia Cantalapidera 
-Slack:[@Victor Garcia](https://code-institute-room.slack.com/team/U0695HZA7FZ)

-GitHub: [Vgarcan](https://github.com/Vgarcan)

-LinkedIn: [Victor Garcia](https://www.linkedin.com/in/vgc89/)

## Check us out!

[LimonXemo - GitHub Pages](https://vgarcan.github.io/CodeInstitute-proj02/) 


## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
  - [CSS Management for Project Structure](#css-management-for-project-structure)
- [Wireframes](#wireframes)
- [Colors](#colors)
  - [Color Customization Process](#color-customization-process)
  - [User-Friendly Approach](#user-friendly-approach)
  - [Future Considerations](#future-considerations)
- [User Experience](#user-experience)
  - [Key Principles](#key-principles)
  - [User Stories](#user-stories)
  - [Customization and Flexibility](#customization-and-flexibility)
  - [Future Enhancements](#future-enhancements)
- [Testing](#testing)
  - [User Stories Testing](#user-stories-testing)
- [Collaborative Efforts](#collaborative-efforts)
- [Current State and Future Plans](#current-state-and-future-plans)
    - [Current State](#current-state)
    - [Future Plans](#future-plans)
- [Deployment](#deployment)
- [License](#license)
- [Bugs and Challenges](#bugs-and-challenges)
- [Acknowledgement](#acknowledgement)

## Introduction

Xemusic is a personal project initiated by the need to address the musical showcasing requirements of a friend. This endeavor sparked an exploration into the realm of Audio Software Development, leading to the inception of the Xemusic project. Within this project, Limonxemo stands as the flagship application, serving as a testament to the research and development efforts in this field.

Driven by the desire to delve into audio software development, Xemusic aims to provide a platform for experimentation and learning. Limonxemo, the primary outcome of this endeavor, represents a starting point in this journey. It is a versatile music player application designed not only for music playback but also for podcast streaming, showcasing its adaptability and multifunctionality.

With Limonxemo, users can enjoy seamless audio playback experiences, whether they are listening to their favorite tracks or engaging with compelling podcast content. The project aspires to transcend beyond traditional music players by offering support for various audio formats and catering to the diverse needs of creators and listeners alike.

## Technologies Used

Limonxemo has been developed using the following technologies:

- <img src="assets/imgs/readme-pics/html_icon.ico" width="18px"> **HTML:** Utilized for creating the structure of the application's web pages. Limonxemo employs an HTML audio element to handle music playback, with interactions managed through additional HTML elements.
- <img src="assets/imgs/readme-pics/css-icon.ico" width="18px"> **CSS:** Employed to style and customize the appearance of the application, ensuring a visually appealing user interface.
- <img src="assets/imgs/readme-pics/js-icon.ico" width="18px"> **JavaScript:** Utilized for implementing interactive features and functionalities, including DOM manipulation and event handling tasks.
- <img src="assets/imgs/readme-pics/bootstrap-icon.ico" width="18px"> **Bootstrap:** Integrated to leverage its responsive design components and utilities, ensuring compatibility with various devices and screen sizes.
- <img src="assets/imgs/readme-pics/jquery-icon.ico" width="18px"> **jQuery:** Solely used for animations within the application, enhancing the visual experience for users.

These technologies have been carefully chosen to ensure a robust and user-friendly music player application, with JavaScript primarily responsible for DOM manipulation and interaction handling.


## Project Structure

- <img src="assets/imgs/readme-pics/red-folder-icon.ico" width="18px"> Root Directory
    - <img src="assets/imgs/readme-pics/folder-icon.ico" width="18px"> assets (Contains project assets)
        - <img src="assets/imgs/readme-pics/folder-icon.ico" width="18px">audio (Contains audio files)
            - <img src="assets/imgs/readme-pics/folder-icon.ico" width="18px">Music Folder 1 (Contains music files and related images)
                - <img src="assets/imgs/readme-pics/filetype-mp3-icon.ico" width="18px"> song1.mp3
                - <img src="assets/imgs/readme-pics/filetype-mp3-icon.ico" width="18px"> song2.mp3
                - <img src="assets/imgs/readme-pics/image-con.ico" width="18px"> related_image1.jpg
                - <img src="assets/imgs/readme-pics/image-con.ico" width="18px"> related_image2.png
                - ...
            - <img src="assets/imgs/readme-pics/folder-icon.ico" width="18px"> Music Folder 2 (Contains music files and related images)
                - <img src="assets/imgs/readme-pics/filetype-mp3-icon.ico" width="18px"> song3.mp3
                - <img src="assets/imgs/readme-pics/filetype-mp3-icon.ico" width="18px"> song4.mp3
                - <img src="assets/imgs/readme-pics/image-con.ico" width="18px"> related_image3.jpg
                - <img src="assets/imgs/readme-pics/image-con.ico" width="18px"> related_image4.png
                - ...
        - <img src="assets/imgs/readme-pics/folder-icon.ico" width="18px"> css (Contains CSS stylesheets)
            - <img src="assets/imgs/readme-pics/css-filetype-icon.ico" width="18px"> styles.css
        - <img src="assets/imgs/readme-pics/folder-icon.ico" width="18px"> imgs (Contains images)
            - <img src="assets/imgs/readme-pics/folder-icon.ico" width="18px"> readme-pics (Contains images)
              - <img src="assets/imgs/readme-pics/image-con.ico" width="18px"> image1.jpg
              - <img src="assets/imgs/readme-pics/image-con.ico" width="18px"> image2.png
              - ...
            - <img src="assets/imgs/readme-pics/image-con.ico" width="18px"> image1.jpg
            - <img src="assets/imgs/readme-pics/image-con.ico" width="18px"> image2.png
            - ...
        - <img src="assets/imgs/readme-pics/folder-icon.ico" width="18px"> js (Contains JavaScript files)
            - <img src="assets/imgs/readme-pics/js-filetype-icon.ico" width="18px"> main.js
            - <img src="assets/imgs/readme-pics/folder-icon.ico" width="18px"> jq (jQuery folder)
                - <img src="assets/imgs/readme-pics/js-filetype-icon.ico" width="18px"> jq.js
    - <img src="assets/imgs/readme-pics/git-icon.ico" width="18px"> .gitignore
    - <img src="assets/imgs/lemon_music.ico" width="18px"> favicon.ico (Project favicon)
    - <img src="assets/imgs/readme-pics/html-filetype-icon.ico" width="18px"> index.html (Main HTML file)
    - <img src="assets/imgs/readme-pics/ic-info-outline.ico" width="18px"> README.md (Project README)

The project structure is organized in this way to maintain a clear and coherent organization of all files and resources used in the project development. The 'assets' folder is used to store all project resources, such as audio files, CSS stylesheets, and images. Within the 'audio' folder, subfolders have been created to organize music files and images related to each song. Similarly, the 'css' folder contains CSS files used to style the project interface, while the 'imgs' folder hosts images used in the project. The 'js' folder contains JavaScript files, including the main script 'main.js' and the jQuery script in the 'jq' subfolder. This structure provides an orderly and easy way to access all project resources, facilitating project development and maintenance.


### CSS Management for Project Structure
In this project, we've opted to use only one CSS stylesheet. Since the project is not very large and doesn't require extensive styling, using a single stylesheet helps keep everything centralized and straightforward. This approach simplifies the management of styles and ensures consistency throughout the project

## Wireframes

For the design and layout of the project, wireframes were created to provide a visual representation of the main pages. These wireframes were instrumental in planning the structure and functionality of the application.

### Desktop Wireframe

<details><summary><b>Desktop Wireframe</b></summary>
   <img src="assets/imgs/"></details>
   <hr>

### Mobile Wireframe

<details><summary><b>Mobile Wireframe</b></summary>
   <img src="assets/img/mobile_wireframe.png"></details>
   <hr>

These wireframes helped in determining the placement of elements, navigation flow, and overall user experience across different devices.

## Colors

In the "Color Customization Process" section, we describe how we drew inspiration from the freshness of summer and the coolness of a lemon. The color palette reflects this, with lemon-yellow and lime-green hues dominating. Additionally, we carefully selected light blue backgrounds to complement these colors, creating a visually cohesive experience. The transparency of the black sections of the player allows the backgrounds to shine through slightly, adding depth and expanding the visual space. This approach ensures that both the colors and backgrounds work harmoniously to enhance the overall design aesthetics.

### Color Customization Process
 Looking ahead, while color customization isn't currently a feature, it's a future consideration. We're exploring options to streamline color and image customization using JavaScript, making it easier for users to personalize their experience.

### Future Considerations

In future iterations of the project, additional customization options may be explored, such as icon styles, themes, or advanced color palettes. The goal is to continually enhance the customization capabilities of LimonXemo to provide users with a personalized and enjoyable music listening experience.
#### User-Friendly Approach

By centralizing color customization in a separate JavaScript file and providing clear instructions and comments, LimonXemo aims to make it effortless for users to tailor the player to their preferences. This user-friendly approach ensures that users can easily adjust colors without the need for extensive technical knowledge or coding expertise.


## User Experience

LimonXemo is designed to deliver a seamless and intuitive user experience, prioritizing simplicity and ease of use. The project aims to minimize installation requirements and eliminate unnecessary complexity, ensuring that users can effortlessly integrate the player into their websites or platforms.

### Key Principles

- **Simplicity:** LimonXemo features a clean and straightforward interface, free from clutter and unnecessary buttons or elements. This simplicity reduces cognitive load and prevents users from feeling overwhelmed.
  
- **Ease of Use:** The player is designed to be incredibly user-friendly, requiring minimal setup and configuration. Users can quickly understand and navigate the interface without the need for extensive tutorials or documentation.
  
- **Accessibility:** Accessibility considerations are paramount in ensuring that LimonXemo is usable by all individuals, regardless of their abilities or technical proficiency. The player adheres to best practices for web accessibility, making it accessible to a wide range of users.

### User Stories

**Main Client (Website Owner):**
1. As a website owner, I want an easy-to-integrate music player for my site, to provide my users with a seamless listening experience.
2. As a website owner, I want a customizable music player, so I can adapt it to the design and style of my website.
3. As a website owner, I want a music player that can also play podcasts, to offer a variety of multimedia content to my users.
4. As a website owner, I want a music player with an intuitive and user-friendly interface, to ensure that my users can navigate and enjoy the content without difficulties.

**Secondary Client (Podcast Listener):**
1. As a podcast listener, I want a music player that allows me to search and play my favorite podcasts easily, for quick access to my preferred content.
2. As a podcast listener, I want a music player with a bookmarks or favorites feature, to save episodes that I want to listen to later.
3. As a podcast listener, I want a music player with adjustable playback speed options, so I can listen to podcasts at my own pace.
4. As a podcast listener, I want a music player that displays detailed information about each episode, such as duration, description, and release date, so I can make informed decisions about what to listen to.

**Tertiary Client (General Music User):**
1. As a general music user, I want a music player with a wide variety of playback controls, such as play, pause, forward, and rewind, for full control over my listening experience.
2. As a general music user, I want a music player with customizable playlist features, to organize and enjoy my favorite music anytime.
3. As a general music user, I want a music player that offers song recommendations based on my tastes and preferences, to easily discover new music.
4. As a general music user, I want a music player with support for displaying song lyrics, so I can follow along with the lyrics of my favorite songs as I listen.

These User Stories represent the needs and expectations of different types of users who might be interested in LimonXemo. Let me know if you need any further adjustments!

### Customization and Flexibility

While the primary focus of LimonXemo is music playback, the project also aims to accommodate additional functionalities over time. For example, users may have the option to upload and play podcasts in addition to music files. This flexibility allows the player to cater to a broader range of user needs and preferences.

### Future Enhancements

One of the initial goals of the project was to automatically recognize and load saved playlists within the application. However, due to technical complexities and security considerations, this feature is currently on hold. We aim to simplify the user experience by automatically capturing and loading playlists without requiring manual manipulation of JavaScript objects. While this functionality is not yet implemented, it remains a priority for future development.

Below is a conceptual overview of how this feature would work:

<details>
  <summary><b>Conceptual Overview</b></summary>
  <img src="assets/img/future-enhancements-concept.jpg">
</details>
<hr>

## Testing
Comprehensive testing is conducted to ensure the functionality, performance, and compatibility of LimonXemo across different platforms and browsers.

- **HTML Validation:** Ensuring the HTML markup follows best practices and standards.
- **CSS Validation:** Validating CSS code to eliminate any syntax errors or inconsistencies.
- **Accessibility:** Ensuring the music player is accessible to users with disabilities, following WCAG guidelines.
- **Wave Validation:** Conducting accessibility testing using tools like WAVE to identify and address any accessibility issues.
- **Lighthouse Validation:** Using Lighthouse audits to measure the performance, accessibility, and SEO of the music player.
- **Device Testing:** Testing LimonXemo on various devices to ensure compatibility and responsiveness.
- **Browser Compatibility:** Ensuring LimonXemo works seamlessly across different web browsers.

# User Stories Testing

During testing across various devices, the ChemiPlayer app's compatibility and usability have been evaluated based on its existing features and functionalities.

**First-time User**

1. **Introduction Clarity:**
   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Platform Introduction | Visit the home page and read introductory content | Clear understanding of the platform's purpose | Works as expected |

**Regular User**

1. **Music Playback:**
   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Play Music Tracks | Select and play music tracks from the library | Seamless playback experience | Works as expected |

2. **Navigation:**
   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Browse Music Categories | Explore and navigate through different music categories | Intuitive navigation experience | Works as expected |

3.. **Accessibility Features:**
   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Accessible User Interface | Ensure accessibility features are functional and easy to use | User-friendly accessibility options | Works as expected |

**Admin/User Management**

1. **Content Management:**
   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Manage Music Library | Add, remove, and organize music tracks in the library | Eassy management of music content | Works as expected |


## Collaborative Efforts

This project has been developed autonomously, without the need for external collaborations. We extend our special thanks to Josué Martín for providing the audio files that served as the foundation for the player's development. Additionally, we acknowledge the valuable contribution of the resources found on the Internet, which were instrumental in advancing this project.


## Current State and Future Plans

#### Current State
LimonXemo is currently in its initial development phase, with core functionalities implemented and undergoing testing.

#### Future Plans
- **Enhanced Features:** Continuously adding new features and enhancements based on user feedback and emerging technologies.
- **Performance Optimization:** Optimizing the performance of LimonXemo for faster loading times and smoother operation.
- **Integration:** Exploring integration with third-party services and platforms to enrich the music listening experience.
- **Localization:** Adding support for multiple languages to make LimonXemo accessible to a global audience.

## Deployment
LimonXemo will be deployed to a live environment once testing is complete and all necessary optimizations are implemented. Users will be able to access the music player through their web browsers.

## License
LimonXemo is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.

You are free to:

- **Share:** Copy and redistribute the material in any medium or format.

- **Adapt:** Remix, transform, and build upon the material.

Under the following terms:

- **Attribution:** You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

- **NonCommercial:** You may not use the material for commercial purposes.

- **ShareAlike:** If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

For more information about the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License, visit [here](https://creativecommons.org/licenses/by-nc-sa/4.0/).
.

## Bugs and Challenges
Throughout the development process, various bugs and challenges may arise. These are diligently addressed and resolved to ensure the stability and reliability of LimonXemo.

# Acknowledgement

We extend our gratitude to [Josue Martin]() for providing their music, which greatly contributed to the project. Additionally, we appreciate the wealth of external resources that have supported us throughout this endeavor.

Special thanks for his invaluable contribution, without which this project would not have been possible. His need for a reliable music player inspired the inception of this project, allowing us to provide a platform for showcasing his music.

LimonXemo has been inspired and developed with reference to various resources available online. In particular, we would like to acknowledge and express our gratitude to the post by [GEEKFORGEEKS.ORG](https://www.geeksforgeeks.org/) that provided valuable insights and guidance on creating a music player.

The post, which can be accessed [here](https://www.geeksforgeeks.org/create-a-music-player-using-javascript/), served as a helpful reference during the development process, providing useful tips and techniques for building a functional music player. While we have not directly copied the content, we have drawn inspiration from the ideas and methodologies presented in the post to enhance our project.

We also want to acknowledge the numerous other online resources and guides that have contributed to our understanding and implementation of music player development concepts.

