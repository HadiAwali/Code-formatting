document.addEventListener("DOMContentLoaded", () => {
    const codeTypeSelect = document.getElementById("codeType");
    const inputCodeTextarea = document.getElementById("inputCode");
    const formatButton = document.getElementById("formatBtn");
    const outputCodeTextarea = document.getElementById("outputCode");

    // Enable interaction
    codeTypeSelect.disabled = false;
    inputCodeTextarea.disabled = false;

    formatButton.addEventListener("click", () => {
        const codeType = codeTypeSelect.value;
        const inputCode = inputCodeTextarea.value;

        try {
            let formattedCode;
            if (codeType === "html") {
                formattedCode = prettier.format(inputCode, {
                    parser: "html",
                    plugins: prettierPlugins,
                });
            } else if (codeType === "css") {
                formattedCode = prettier.format(inputCode, {
                    parser: "css",
                    plugins: prettierPlugins,
                });
            } else if (codeType === "javascript") {
                formattedCode = prettier.format(inputCode, {
                    parser: "babel",
                    plugins: prettierPlugins,
                });
            }
            outputCodeTextarea.value = formattedCode;
        } catch (error) {
            outputCodeTextarea.value = "Error formatting code: " + error.message;
        }
    });
});
