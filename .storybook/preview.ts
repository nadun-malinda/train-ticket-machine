import type { Preview } from "@storybook/react";

// global tailwind css
import "@/app/globals.css";

// shoelace css
import "@shoelace-style/shoelace/dist/themes/light.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
