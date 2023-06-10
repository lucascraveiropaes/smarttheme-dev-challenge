// schema.ts

type InputType = "tab" | "textarea" | "checkbox" | "text" | "color";
type BlockType = "tab";

interface Input {
    type: InputType;
    id: string;
    label: string;
    default?: string;
}

interface Block {
    name: string;
    type: BlockType,
    settings: Input[];
}

interface Section {
    name: string;
    settings: Input[];
    blocks: Block[];
}

// Define your section schema here
export const sectionSchema: Section = {
    "name": "Tabs",
    "settings": [],
    "blocks": [{
        "type": "tab",
        "name": "Tab",
        "settings": [{
            "type": "text",
            "id": "title",
            "label": "Title",
            "default": "Tab Title"
        }, {
            "type": "textarea",
            "id": "content",
            "label": "Content",
            "default": "Tab Content"
        }]
    }]
};
