import fs from "fs";
import path from "path";
import { sectionSchema } from "./schema";

// Read the content.liquid file
const content = fs.readFileSync(path.join(__dirname, "content.liquid"), "utf-8");

// Read the tabs.vanilla.js file
const js = fs.readFileSync(path.join(__dirname, "tabs.vanilla.js"), "utf-8");

// Generate the final output
const output = `
${content}

<script defer>
${js}
</script>

{% schema %}
${JSON.stringify(sectionSchema, null, 4)}
{% endschema %}
`;

// Write the output to the tabs.liquid file
fs.writeFileSync(path.join(__dirname, "../theme/sections/tabs.liquid"), output);
