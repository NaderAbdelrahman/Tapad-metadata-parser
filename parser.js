const fs = require('fs');

const METADATA_SEPARATOR = "---";

fs.readFile('README.md', 'utf8', (err, fileContent) => {
    if (err) throw err;

    const [ metadata, content ] = fileContent.split(`${ METADATA_SEPARATOR }`);
    console.log(metadata);

    let metadata_no_newline =  metadata.replace(/\n/g, " ");
    console.log(metadata_no_newline, "\n");

    // Title parse
    let temp = metadata_no_newline.split(":")[1];
    let title = temp.replace(" description", "");
    title = title.trim();
    console.log(title);
    console.log("\n");

    // Description parse
    temp = metadata_no_newline.split(":")[2];
    let description = temp.replace(" keywords", "");
    // Remove double whitespace
    description = description.replace(/\s{2}/, " ");
    // Remove Preceding whitespace
    description = description.trim();
    console.log(description);
    console.log("\n");

    // Keyword parse
    temp = metadata_no_newline.split(":")[3];
    let keywords = temp.replace(" auth", "");
    keywords = keywords.replace(/\s/g, "");
    keywords = keywords.split(",");
    console.log(keywords);
    console.log("\n");

    // Auth Parse
    temp = metadata_no_newline.split(":")[4];
    let auth = temp;
    auth = auth.replace(/\s/g, "");
    auth = auth.split(",");
    console.log(auth);
    console.log("\n");


});