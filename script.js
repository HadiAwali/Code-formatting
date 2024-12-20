document.getElementById("formatBtn").addEventListener("click", () => {
    const codeType = document.getElementById("codeType").value;
    const inputCode = document.getElementById("inputCode").value;

    let formattedCode;

    try {
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

        document.getElementById("outputCode").value = formattedCode;
    } catch (error) {
        document.getElementById("outputCode").value =
            "Error formatting code: " + error.message;
    }
});
