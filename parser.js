const fs = require('fs');

const METADATA_SEPARATOR = "---";

fs.readFile('README.md', 'utf8', (err, fileContent) => {
    if (err) throw err;

    const [ metadata, content ] = fileContent.split(`${ METADATA_SEPARATOR }`);
    console.log(metadata, content);

    const parsedMetadata = {
        title: "",
        keywords: [],
        auth: [],
        description: ""
    };

    metadata.split("\n").forEach((line) => {
       const [ key, data ] = line.split(":");

       if (!data) {
           // this is a line of the description, so we should add it to the existing description
           parsedMetadata.description += ` ${ key.trim() }`;
           return;
       }

       // don't add anything to metadata if key is not part of metadata
       if (!parsedMetadata.hasOwnProperty(key)) {
           return;
       }

       if (Array.isArray(parsedMetadata[key])) {
           parsedMetadata[key] = data.split(', ').map((val) => val.trim());
           return;
       }

       parsedMetadata[key] = data.trim();
    });

    console.log(parsedMetadata);

    //
    // // Title parse
    // let temp = metadataNoNewline.split(":")[1];
    // let title = temp.replace(" description", "");
    // title = title.trim();
    // console.log(title);
    // console.log("\n");
    //
    // // Description parse
    // temp = metadataNoNewline.split(":")[2];
    // let description = temp.replace(" keywords", "");
    // // Remove double whitespace
    // description = description.replace(/\s{2}/, " ");
    // // Remove Preceding whitespace
    // description = description.trim();
    // console.log(description);
    // console.log("\n");
    //
    // // Keyword parse
    // temp = metadataNoNewline.split(":")[3];
    // let keywords = temp.replace(" auth", "");
    // keywords = keywords.replace(/\s/g, "");
    // keywords = keywords.split(",");
    // console.log(keywords);
    // console.log("\n");
    //
    // // Auth Parse
    // temp = metadataNoNewline.split(":")[4];
    // let auth = temp;
    // auth = auth.replace(/\s/g, "");
    // auth = auth.split(",");
    // console.log(auth);
    // console.log("\n");


});