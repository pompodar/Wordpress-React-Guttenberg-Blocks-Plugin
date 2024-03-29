const { registerBlockType } = wp.blocks;
const { Component } = wp.element;
const { RichText, InspectorControls, BlockControls, AlignmentToolbar } =
    wp.blockEditor;
const {
    ToggleControl,
    PanelBody,
    PanelRow,
    CheckboxControl,
    SelectControl,
    ColorPicker,
    Toolbar,
    IconButton,
} = wp.components;

class FirstBlockEdit extends Component {
    
    render() {
        const { attributes, setAttributes } = this.props;

        const alignmentClass =
            attributes.textAlignment != null
                ? "has-text-align-" + attributes.textAlignment
                : "";

let cats = [];
        let selectedCat;
        let posts = [1];

wp.apiFetch({
    url: "/wp-json/wp/v2/categories",
}).then((categories) => {
    setAttributes({
        categories: categories,
    });
});
        
       
        
if (attributes.categories) {
    cats = attributes.categories;
    selectedCat = attributes.selectedCategory;
    
        posts = attributes.posts;

}

        if (attributes.selectedCategory) {
            wp.apiFetch({
                url:
                    "/wp-json/wp/v2/posts?categories=" + attributes.selectedCategory,
            }).then((posts) => {
                setAttributes({
                    posts: posts,
                });
            });
        }


        function updateCategory(e) {
    setAttributes({
        selectedCategory: e.target.value,
    });
        }
        
        const divStyle = {
    background: attributes.favoriteColor
};
        
        return (
            <div className={alignmentClass}>
                <InspectorControls>
                    <PanelBody
                        title="Most awesome settings ever"
                        initialOpen={true}
                    >
                        <PanelRow>
                            <ToggleControl
                                label="Toggle me"
                                checked={attributes.toggle}
                                onChange={(newval) =>
                                    setAttributes({ toggle: newval })
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <SelectControl
                                label="What's your favorite animal?"
                                value={attributes.favoriteAnimal}
                                options={[
                                    { label: "Dogs", value: "dogs" },
                                    { label: "Cats", value: "cats" },
                                    {
                                        label: "Something else",
                                        value: "weird_one",
                                    },
                                ]}
                                onChange={(newval) =>
                                    setAttributes({ favoriteAnimal: newval })
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ColorPicker
                                color={attributes.favoriteColor}
                                onChangeComplete={(newval) => {
                                    setAttributes({
                                        favoriteColor: newval.hex,
                                    });
                                }}
                                disableAlpha
                            />
                        </PanelRow>
                        <PanelRow>
                            <CheckboxControl
                                label="Activate lasers?"
                                checked={attributes.activateLasers}
                                onChange={(newval) =>
                                    setAttributes({ activateLasers: newval })
                                }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <AlignmentToolbar
                        value={attributes.textAlignment}
                        onChange={(newalign) =>
                            setAttributes({ textAlignment: newalign })
                        }
                    />
                    <Toolbar>
                        <IconButton
                            label="My very own custom button"
                            icon="edit"
                            className="my-custom-button"
                            onClick={() => console.log("pressed button")}
                        />
                    </Toolbar>
                </BlockControls>
                <select onChange={updateCategory} value={selectedCat}>
                    {cats.map((cat) => {
                        return (
                            <option value={cat.id} key={cat.id}>
                                {cat.name}
                            </option>
                        );
                    })}
                </select>
                <div>
                    {posts.map((post) => {
                        return (
                            <div style={divStyle}>
                                {post.slug}
                            </div>
                        );
                    })}
                </div>
                <RichText
                    tagName="h2"
                    placeholder="Write your heading here"
                    value={attributes.myRichHeading}
                    onChange={(newtext) =>
                        setAttributes({ myRichHeading: newtext })
                    }
                />
                <RichText
                    tagName="p"
                    placeholder="Write your paragraph here"
                    value={attributes.myRichText}
                    onChange={(newtext) =>
                        setAttributes({ myRichText: newtext })
                    }
                />
            </div>
        );
    }
}

registerBlockType("course-block/my-new-block-course2", {
    title: "my-new-block-course2",
    category: "common",
    icon: "smiley",
    description: "Learning in progress",
    keywords: ["my-new-block-course2"],
    attributes: {
        myRichHeading: {
            type: "string",
        },
        myRichText: {
            type: "string",
        },
        textAlignment: {
            type: "string",
        },
        toggle: {
            type: "boolean",
            default: true,
        },
        favoriteAnimal: {
            type: "string",
            default: "dogs",
        },
        favoriteColor: {
            type: "string",
            default: "#DDDDDD",
        },
        activateLasers: {
            type: "boolean",
            default: false,
        },
        categories: {
            type: "object",
        },
        selectedCategory: {
            type: "string",
        },
        posts: {
            type: "object",
        },
    },
    supports: {
        align: ["wide", "full"],
    },
    edit: FirstBlockEdit,
    save: (props) => {
        return null;
        // const { attributes } = props;

        // const alignmentClass =
        //     attributes.textAlignment != null
        //         ? "has-text-align-" + attributes.textAlignment
        //         : "";

        // return (
        //     <div className={alignmentClass}>
        //         <RichText.Content
        //             tagName="h2"
        //             value={attributes.myRichHeading}
        //         />
        //         <RichText.Content tagName="p" value={attributes.myRichText} />
        //         {attributes.activateLasers && (
        //             <div className="lasers">Lasers activated</div>
        //         )}
        //     </div>
        // );
    },
});
