📌 MediaWiki Banner Customizer
🚀 A compact, interactive, and visually appealing React tool for customizing MediaWiki banners with sliders for width, height, border-radius, and more!

🌟 Features
✅ Real-time Customization – Change text, background color, font size, width, height, and border-radius dynamically.
✅ Interactive Sliders – Adjust dimensions using sliders instead of manual input for a better UX.
✅ Live Preview – Instantly see changes in a preview box.
✅ Modern UI – Sleek and compact design with smooth animations using framer-motion.
✅ Easy to Use – Simple controls make banner customization effortless.

🛠 Technologies Used
Tech	                             Description
React.js	                         Core framework for UI components
Framer Motion	                     Used for smooth animations
CSS	Styling the UI
Git & GitHub	                     Version control & code hosting
GitHub Pages	                     Deployed the project online

📂 Project Structure

new-banner-tool/
│── src/
│   ├── components/
│   │   ├── Banner.js
│   │   
│   ├── styles/
│   │   ├── banner.css
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── .gitignore
│── README.md

🚀 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/nitika1989/new-banner-tool.git
cd new-banner-tool
2️⃣ Install Dependencies

npm install

3️⃣ Run the App

npm start

Open http://localhost:3000 in your browser.


🚀 1. React & Component-Based Development

✅ Understanding React Basics:
Created reusable components (Banner.js, Controls.js).
Used props and state management to dynamically update the UI.
Handled event listeners for input changes.

✅ Component Structure & Best Practices:
Modularized the code to maintain separation of concerns.
Used controlled components for input fields.
Passed callback functions between components for dynamic updates.

✅ Hooks Usage:
Used useState() for managing component states (banner styles, text, image, colors).
Used useEffect() for handling updates when a component mounts or changes.

🎨 2. UI/UX Enhancements

✅ Styling & CSS Techniques:

Applied CSS Grid & Flexbox for layout adjustments.
Used media queries for responsive design.
Improved button & form styling for better user experience.

✅ Improved User Interactivity:

Added slider inputs for width, height, and border-radius for live preview.
Used dropdown selectors for font selection, animations, and alignment.
Displayed real-time preview of banner changes without needing a refresh.

✅ Compact & Attractive UI Design:

Reduced unnecessary whitespace & padding for a more compact look.
Used rounded borders & shadows to improve aesthetics.
Ensured mobile-friendliness by testing across different screen sizes.

🖼️ 3. Image Handling & Dynamic Backgrounds

✅ File Upload Handling:

Used <input type="file"> to allow users to upload images.
Used URL.createObjectURL() to preview uploaded images dynamically.


✅ Image Fit & Resizing:

Implemented cover, contain, fill options for image placement inside the banner.
Ensured aspect ratio preservation when resizing images.

✅ Gradient & Background Styling:

Applied CSS gradients for dynamic backgrounds.
Allowed users to choose from preset gradients & custom color combinations.

🎬 4. CSS Animations & Transitions
✅ Implemented Various Animations:

Fade-in animation for a smooth appearance.

Slide-in animation from different directions.

Zoom-in effect for better visibility.

✅ Troubleshooting Animation Issues:

Fixed invalid easing type ‘easeout’ error.
Ensured CSS animations apply correctly based on user selection.

🔄 5. API Fetching & Integration
✅ Fetching Data from Wikimedia API:

Used fetch() API to retrieve data from https://api.wikimedia.org/wiki/Current_events.
Handled CORS errors & network failures by adding error handling mechanisms.

✅ Displaying Fetched Data in the Banner:

Dynamically updated the banner text with live Wikimedia news updates.
Used conditional rendering to show loading states & error messages.

🛠️ 6. State Management & Dynamic Updates
✅ React State Handling Best Practices:

Managed multiple states for text, color, image, gradient, width, height, animations.
Used object-based state updates to manage multiple properties efficiently.
Prevented unnecessary re-renders by using state optimizations.

✅ Using Sliders & Controls for Live Customization:
Integrated range sliders for controlling width, height, and border-radius dynamically.
Allowed users to see real-time changes without reloading the page.

🌐 7. GitHub & Version Control Best Practices
✅ Git Workflow & Issue Fixes:

Fixed untracked files issue (git add src/styles and commit).
Handled branch naming & merging for structured development.
Fixed "Module not found" errors by properly structuring project files.

✅ Fixing Common Git Errors:
Case-sensitive imports issue (import Banner from './components/Banner' vs banner.js).
Outside src directory import error (fixed by moving files inside src/).
Creating a symbolic link in Windows (mklink command fix).

📦 8. Deploying React App & Debugging Issues
✅ Steps for Deployment:

Used Netlify/Vercel for quick deployment.

Fixed blank screen issue after deploying by ensuring correct homepage in package.json.
Found & copied deployed app link to test live version.

✅ Fixing Post-Deployment Bugs:

Fixed CSS & animation issues not reflecting after deployment.
Ensured responsive design works across different devices.
Verified fetch API permissions & security settings.

⚡ 9. Performance Optimization
✅ Code Optimization Techniques:

Removed unnecessary re-renders using React memoization & state batching.
Minimized DOM updates for better performance.

✅ Reducing Bundle Size:

Used dynamic imports (React.lazy()) to load components only when needed.
Minimized unnecessary dependencies to reduce build size.

🔥 10. Troubleshooting & Debugging Skills
✅ Fixed Multiple Errors & Issues:

Blank screen issue due to incorrect component import paths.
CSS animation not working because of missing animation class in JSX.
Duplicate banners appearing due to incorrect state handling.

✅ Used Console Logs & DevTools for Debugging:

Debugged React errors using React DevTools & Chrome DevTools.
Fixed JavaScript runtime errors by checking state changes in the console.

💡 Final Takeaways & Future Improvements
Key Takeaways from This Project:
✅ Gained hands-on experience in React & frontend development.
✅ Learned how to debug & fix real-world errors effectively.
✅ Improved UI/UX skills by designing a more interactive and compact interface.
✅ Mastered API fetching & dynamic content updates.
✅ Understood Git & deployment workflows.

Possible Future Enhancements:
🚀 Multi-language support for a global audience.
🎨 More advanced animations & hover effects.
📜 Template-based banner creation for easier customization.
📦 Export banners as downloadable images or PDFs.
🎭 AI-based banner recommendations using machine learning.

🎯 Conclusion
This project has been an incredible learning experience, helping me become proficient in:
✔ React development
✔ CSS animations & UI design
✔ State management & event handling
✔ API integration & debugging
✔ GitHub version control & deployment

---------------------------------------------------------------------------------------------------------------------------------------------------------Updated Mediawiki Banner Tool----------------------------------------------------------------------------------------------------------------



🆕 New Features Added 🚀
✅ Clickable CTA Button: Users can now add a Call-to-Action button on the banner, linking to Wikimedia pages or any other relevant URL. This ensures users can engage with campaigns more effectively.
✅ Full Customization Panel: Modify text, background, font, size, alignment, and borders dynamically.
✅ Image Upload Support: Add custom images to banners for a richer visual experience.
✅ Smooth Animations: Choose from different animations (Fade In, Slide In, Blink, etc.) to enhance the banner’s appearance.
✅ Download as Image: Users can export the banner as a PNG image for reuse.
✅ Responsive & User-Friendly UI: Built with React & Framer Motion, ensuring a modern and intuitive experience.
______________________________________
________________________________________
Attatching screenshot of my output.



📌 How to Use the Banner Tool
1️⃣ Clone the Repository:

git clone https://github.com/nitika1989/new-banner-tool
cd new-banner-tool
2️⃣ Install Dependencies:

npm install
3️⃣ Run the Application:

npm start
4️⃣ Customize Your Banner:
•	Edit the banner text, colors, fonts, alignment, size, and animations.
•	Upload an image to make the banner visually engaging.
•	Add a CTA button with a clickable external link.
•	Download the banner as an image file.
________________________________________
💡 What I Learned from This Contribution
✨ Deepened my understanding of React.js – Managing state, handling events, and structuring a scalable component-based UI.
✨ Debugging & Problem-Solving – Faced and resolved several real-world React and CSS issues.
✨ Enhanced UX/UI Skills – Focused on accessibility, responsiveness, and aesthetics.
✨ Gained Open-Source Contribution Experience – Learned to collaborate, push code, and submit meaningful contributions to Wikimedia’s ecosystem.
________________________________________
🚀 Why This Contribution is Unique & Impactful
This project stands out because it goes beyond basic banner customization. It introduces interactive elements like the CTA button, real-time styling, animations, and image uploads—making the tool not just a banner generator but a comprehensive media design tool for Wikimedia contributors.
Through this contribution, I aimed to make banner creation more accessible, efficient, and visually appealing, helping Wikimedia communities deliver their messages more effectively.
________________________________________
🔗 Future Enhancements
🔹 Multi-Language Support – Enable users to create banners in different languages for a global reach.
🔹 Pre-made Templates – Provide ready-to-use banner templates for faster customization.
🔹 Advanced Animations – Add more animation effects to make banners more dynamic.
________________________________________
🌟 Final Thoughts
This contribution has been an incredible learning experience. From fixing simple CSS issues to implementing complex interactive features, I’ve grown as a developer and open-source contributor.
🚀 I believe this updated MediaWiki Banner Tool will be a game-changer for the Wikimedia community, making banner creation more accessible, engaging, and efficient!
Would love to hear feedback from the community! 🌍✨
📌 Contributor: [Nitika Vasishtha]
📌 GitHub Repo: [https://github.com/nitika1989/new-banner-tool]
________________________________________
🙌 Thank You, Wikimedia & Outreachy!
A huge thanks to my mentors and the Wikimedia team for their guidance and support. This journey has been challenging yet rewarding, and I am excited to continue contributing to open-source projects that make a real impact! 🚀🎉
 




