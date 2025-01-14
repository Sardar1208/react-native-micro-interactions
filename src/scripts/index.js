const fs = require('fs');
const path = require('path');

// Path to the file to be generated
const configFilePath = path.join(__dirname, '..', 'mint.config.ts');

// The content of the mint.config.ts file
const configContent = `import { AnimationConfig } from "react-native-micro-animations";

export default AnimationConfig({
    "click": {
        shrink: 0.9,
        shrinkDuration: 50,
    },
    "buzz": {
        frequency: 2,
        rotation: 2,
        duration: 50,
    },
    "popIn": {
        duration: 250,
        withBounce: false,
    },
    "textSlideVertical": {
        duration: 100,
        offset: 30,
    },
    "textSlideHorizontal": {
        duration: 100,
        offset: 70,
    }
});
`;

// Create or overwrite the mint.config.ts file
fs.writeFile(configFilePath, configContent, (err) => {
    if (err) {
        console.error('Error creating mint.config.ts:', err);
    } else {
        console.log('mint.config.ts created successfully!');
    }
});
